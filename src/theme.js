import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#D6BCE0",
    },
    secondary: {
      main: "#ED8A1B",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
