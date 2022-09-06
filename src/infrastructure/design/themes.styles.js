import { colors } from "./infrastructure";

export const Theme = {
  light: {
    body: {
      ...colors.body.light,
    },
    ui: {
      menu: {
        ...colors.ui.menu.light,
      },
      infoCard: {
        ...colors.ui.infoCard.light,
      },
      button: {
        ...colors.ui.button.light,
      },
      text: {
        ...colors.ui.text.light,
      },
    },
  },
  dark: {
    body: {
      ...colors.body.dark,
    },
    ui: {
      menu: {
        ...colors.ui.menu.dark,
      },
      infoCard: {
        ...colors.ui.infoCard.dark,
      },
      button: {
        ...colors.ui.button.dark,
      },
      text: {
        ...colors.ui.text.dark,
      },
    },
  },
};
