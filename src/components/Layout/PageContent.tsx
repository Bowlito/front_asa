// components/Layout/PageContent.tsx
import type { ReactNode } from "react";
import { Box } from "@mui/material";

interface PageContentProps {
    children: ReactNode;
    minHeight?: string | number; // optionnel, par défaut 60vh
    centerVertical?: boolean;     // centrer verticalement si true
}

export default function PageContent({
    children,
    minHeight = "60vh",
    centerVertical = true,
}: PageContentProps) {
    return (
        <Box
            sx={{
                width: "100%",                // prend toute la largeur du main content
                display: "flex",
                flexDirection: "column",
                alignItems: "center",         // centre horizontalement
                justifyContent: centerVertical ? "center" : "flex-start",
                minHeight,
                textAlign: "center",
                gap: 2,
                p: 2,
            }}
        >
            {children}
        </Box>
    );
}
