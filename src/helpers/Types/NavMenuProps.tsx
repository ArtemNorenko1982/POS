interface NavMenuProps {
  menuItems: Array<{
    title: string;
    src: string;
    img?: unknown;
    action?: () => void;
  }>;
}

export default NavMenuProps;
