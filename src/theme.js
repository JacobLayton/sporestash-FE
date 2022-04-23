import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#000000",
    },
    primary: {
      main: "#D6BCE0",
    },
    secondary: {
      main: "#ED8A1B",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#D6BCE0",
      secondary: "#D6BCE0",
      disabled: "#000000",
    },
    background: {
      paper: "#000000",
      default: "#000000",
    },
    action: {
      active: "#D6BCE0",
      // hover: "red",
      // hoverOpacity: 0.08,
      // selected: "rgba(255, 255, 0, 0.16)", // Doesnt do anything
      // selectedOpacity: 0.5,
    },
  },
  // typography: {
  //   fontFamily: "NTR",
  // },
  shape: {
    borderRadius: "var(--border-radius)",
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundImage: "none",
      },
    },
  },
});

export default theme;
