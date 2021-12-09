import React from "react";
import { render } from "react-dom";
import App from "./components/App";
require("./stylesheets/styles.css");
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    background: {
      paper: "#1A659E",
      inner: "#F7F4F3",
    },
  },
});

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
