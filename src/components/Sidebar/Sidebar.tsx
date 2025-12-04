// Sidebar.tsx

import {
    List,
    ListItemButton,
    ListItemText,
    Box,
    Toolbar,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { theme } from "../../theme/theme";
import { useGlobalContext } from "../../context/GlobalContext";

// Définition des items de la sidebar
interface SidebarItem {
    label: string;
    to: string;
}

interface SidebarProps {
    onNavigate?: () => void; // optionnel
}

export default function Sidebar({ onNavigate }: SidebarProps) {
    const { isConnected } = useGlobalContext();
    const location = useLocation();
    const sidebarItems: SidebarItem[] = [
        !isConnected
            ? { label: "Connexion / Inscriptions", to: "/login" }
            : { label: "Mon compte", to: "/account" },
        { label: "Home", to: "/" },
        { label: "Dashboard", to: "/dashboard" },
        { label: "Liste des membres", to: "/users" },
        { label: "Gestion des adhérents", to: "/adherents" },
        // ajoute d'autres pages ici si besoin
    ];

    return (
        <Box
            sx={{
                width: 240,
                bgcolor: "#f5f7f5",
                height: "100%",
                overflowX: "hidden",
            }}
        >
            {/* Espace pour AppBar */}
            <Toolbar />

            <List>
                {sidebarItems.map((item) => {
                    const isSelected = location.pathname === item.to;

                    return (
                        <ListItemButton
                            key={item.to}
                            component={RouterLink}
                            to={item.to}
                            selected={isSelected}
                            onClick={onNavigate}
                            sx={{
                                color: isSelected
                                    ? theme.palette.primary.light
                                    : theme.palette.primary.main,
                                bgcolor: isSelected
                                    ? "primary.main"
                                    : "transparent",
                                borderRadius: 1,
                                my: 0.5,
                                "&:hover": {
                                    bgcolor: isSelected
                                        ? theme.palette.primary.main
                                        : "rgba(102,181,102,0.1)",
                                    color: theme.palette.primary.dark,
                                },
                                "&.Mui-focusVisible": {
                                    bgcolor: "rgba(102,181,102,0.15)",
                                },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );
}
