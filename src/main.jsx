import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import {
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
//import { FaSun } from "react-icons/fa";
//import { FaMoon } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "./pages/Components/ScrollTop.jsx";

function Main() {
  const [themeSelect, setThemeSelect] = useState("dark");

  const darkMode = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "rgb(12, 16, 37)",
        default: "rgb(29, 28, 28)",
      },
    },
  });

  const lightMode = createTheme({
    palette: {
      mode: "light",
      background: {
        paper: "rgb(99, 98, 99)",
        default: "rgb(99, 98, 99)",
      },
    },
  });
  return (
    <ThemeProvider theme={themeSelect === "dark" ? darkMode : lightMode}>
      <CssBaseline />
      <IconButton
        sx={{ position: "absolute", right: 20, top: 20, zIndex: 1000 }}
        onClick={() =>
          setThemeSelect(themeSelect === "light" ? "dark" : "light")
        }
      >
        {/*themeSelect === "dark" ? (
          <FaSun fontSize={35} color="rgb(251, 255, 0)" />
        ) : (
          <FaMoon fontSize={35} color="rgb(41, 40, 40)" />
        )*/}
      </IconButton>
      <ScrollTop />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
