// components/Layout/Footer.tsx
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100vw",        // prend toute la largeur de la fenêtre
                p: 2,
                bgcolor: "background.paper",
                textAlign: "center",
                boxSizing: "border-box" // garantit que padding ne déborde pas
            }}
        >
            <Typography variant="body2" color="text.secondary">
                &copy; {new Date().getFullYear()} My App. All rights reserved.
            </Typography>
        </Box>
    );
}
