import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Flashsheet from "./pages/Flashsheet";
import Welcome from "./pages/Welcome";

const theme = createTheme({
  palette: {
    primary: {
      main: "#577ef6",
    
    
    },
    secondary: {
      main: "#becaa4",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Welcome />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="flashsheet" element={<Flashsheet />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
