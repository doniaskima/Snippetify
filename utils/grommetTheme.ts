import { grommet, ThemeType } from "grommet/themes";
import { deepMerge } from "grommet/utils";

import { neutral, light } from "./theme";

const customTheme = (color: string): ThemeType =>
  deepMerge(grommet, {
    global: {
      spacing: "12px",
      focus: { border: { color } },
    },
    rangeInput: {
      track: {
        color: neutral[100],
        height: "4px",
        extend: () => `border-radius: 1000px`,
      },
      thumb: {
        color,
      },
    },
  });

export default customTheme;
