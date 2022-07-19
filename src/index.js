import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
      dark: "#A66C00",
      light: "#DFA843",
    },
    secondary: {
      main: "#FFFFFF",
      brown: "#5C3C00",
      green: "#75A21F",
    },
    background: {
      paper: "#FFA500",
    },
    typography: {
      fontFamily: "Poppins"
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
