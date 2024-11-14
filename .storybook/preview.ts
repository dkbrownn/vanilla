import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/styles/index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "red" },
    current: "dark",
    darkClass: "lights-out",
    lightClass: "lights-on",
    classTarget: "html",
    stylePreview: true,
  },
};
export default preview;
