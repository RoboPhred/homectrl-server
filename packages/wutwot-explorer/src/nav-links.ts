export interface NavItem {
  path: string;
  i18nKey: string;
}

const NavItems: NavItem[] = [
  {
    path: "/",
    i18nKey: "things.noun_titlecase",
  },
  {
    path: "/settings",
    i18nKey: "settings.noun_titlecase",
  },
];

export default NavItems;