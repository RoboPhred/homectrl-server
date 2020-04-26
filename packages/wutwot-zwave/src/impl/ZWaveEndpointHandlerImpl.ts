import { Endpoint } from "zwave-js/build/lib/node/Endpoint";
import { PluginThingsManager } from "@wutwot/core";
import { ZWaveNode } from "zwave-js";

import { ZWaveEndpointMonitorFactory } from "../contracts";
import { ZWaveEndpointHandler } from "../components";
import { METADATA_ZWAVE_NODE, METADATA_ZWAVE_ENDPOINT } from "../metadata-keys";
import { ZWaveEndpointMonitor } from "../types";
import { isNotNull } from "../utils";

export class ZWaveEndpointHandlerImpl implements ZWaveEndpointHandler {
  private _destroyed = false;
  private _monitors: ZWaveEndpointMonitor[] = [];

  constructor(
    private _endpoint: Endpoint,
    private _thingsManager: PluginThingsManager,
    private _monitorFactories: ZWaveEndpointMonitorFactory[],
  ) {
    // TODO: Capture errors and log.
    this.initializeThing();
  }

  destroy(): void {
    this._destroyed = true;
    this._monitors.forEach((monitor) => monitor.destroy());
    this._monitors = [];
  }

  private async initializeThing() {
    if (this._destroyed) {
      return;
    }

    const node = this._endpoint.getNodeUnsafe()!;

    const { defaultTitle, defaultDescription } = await getTitleAndDescription(
      this._endpoint,
    );

    const pluginThing = this._thingsManager.addThing({
      pluginLocalId: `${node.id}-${this._endpoint.index}`,
      defaultTitle,
      defaultDescription,
      metadata: {
        [METADATA_ZWAVE_NODE]: node,
        [METADATA_ZWAVE_ENDPOINT]: this._endpoint,
      },
    });

    this._monitors = this._monitorFactories
      .map((factory) => factory.createMonitor(this._endpoint, pluginThing))
      .filter(isNotNull);
  }
}

interface TitleAndDescription {
  defaultTitle: string;
  defaultDescription: string;
}
function fillRemainingTitleDescription(
  input: Partial<TitleAndDescription>,
  fill: Partial<TitleAndDescription> | null,
) {
  if (!fill) {
    return input;
  }

  input.defaultTitle = input.defaultTitle ?? fill.defaultTitle;
  input.defaultDescription =
    input.defaultDescription ?? fill.defaultDescription;
}

async function getTitleAndDescription(
  endpoint: Endpoint,
): Promise<TitleAndDescription> {
  const node = endpoint.getNodeUnsafe()!;

  const result: Partial<TitleAndDescription> = {
    defaultTitle: undefined,
    defaultDescription: undefined,
  };

  const endpointNaming = await getEndpointCCNaming(endpoint);
  fillRemainingTitleDescription(result, endpointNaming);

  if (endpoint.index != 0) {
    const defaultEndpointNaming = await getEndpointCCNaming(
      node.getEndpoint(0),
    );
    fillRemainingTitleDescription(result, defaultEndpointNaming);
  }

  const configNaming = getConfigNaming(node);
  fillRemainingTitleDescription(result, configNaming);

  const classNaming = getClassNaming(node);
  fillRemainingTitleDescription(result, classNaming);

  return result as TitleAndDescription;
}

async function getEndpointCCNaming(
  endpoint: Endpoint,
): Promise<TitleAndDescription | null> {
  const namingAndLocation = endpoint.commandClasses["Node Naming and Location"];
  if (!namingAndLocation.isSupported()) {
    return null;
  }

  const defaultTitle = await namingAndLocation.getName();

  const defaultDescription = await namingAndLocation.getLocation();

  return {
    defaultTitle,
    defaultDescription,
  };
}

function getConfigNaming(node: ZWaveNode): TitleAndDescription | null {
  if (!node.deviceConfig) {
    return null;
  }

  return {
    defaultTitle: node.deviceConfig.label,
    defaultDescription: node.deviceConfig.description,
  };
}

function getClassNaming(node: ZWaveNode): TitleAndDescription | null {
  const deviceClass = node.deviceClass;
  if (!deviceClass) {
    return null;
  }

  return {
    defaultTitle: deviceClass.specific.name,
    defaultDescription: deviceClass.generic.name,
  };
}
