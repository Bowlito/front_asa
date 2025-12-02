// components/Layout/Layout.tsx
import type { ReactNode } from "react";
import { useState } from "react";
import { Box, CssBaseline, Drawer } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import PageContent from "./PageContent";

interface LayoutProps {
    children: ReactNode;
}

const drawerWidth = 240;

export default function Layout({ children }: LayoutProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <CssBaseline />

            {/* Header */}
            <Header onMenuClick={handleDrawerToggle} />

            {/* Body: Sidebar + Main content */}
            <Box sx={{ display: "flex", flex: 1, mt: "64px" /* hauteur header */ }}>
                {/* Sidebar temporaire sur toutes les tailles */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            bgcolor: "#f5f7f5",
                        },
                    }}
                >
                    <Sidebar onNavigate={handleDrawerToggle} />
                </Drawer>

                {/* Main content */}

                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        width: "100%",           // full width
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",   // étale le contenu horizontalement
                        justifyContent: "flex-start",
                    }}
                >
                    <PageContent>
                        {children}
                    </PageContent>
                </Box>
            </Box>

            {/* Footer full width */}
            <Footer />
        </Box>
    );
}
