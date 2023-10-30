import Typography from "./Typography";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
  },
};

export const Default = {
  args: {
    children: "FOooooo"
  },
};


export const Heading1 = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2 = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};


export const Heading3 = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Heading4 = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const Heading5 = {
  args: {
    variant: "h5",
    children: "Heading 5",
  },
};

export const Heading6 = {
  args: {
    variant: "h6",
    children: "Heading 6",
  },
};

export const Paragraph = {
  args: {
    variant: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Small = {
  args: {
    variant: "small",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Boldened = {
  args: {
    variant: "p",
    boldened: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Underlined = {
  args: {
    variant: "p",
    underlined: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
