// main.jsx
import { GlobalProvider } from "./context/GlobalContext.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import "./index.css";
import App from "./App";
import { theme } from "./theme/theme"; // ton thème global

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                    <App />
                </SnackbarProvider>
            </ThemeProvider>
        </GlobalProvider>
    </StrictMode>
);
