// components/Layout/Header.tsx
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

interface HeaderProps {
    onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
    const { user, setUser, isConnected, setIsConnected } = useGlobalContext();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onMenuClick) onMenuClick(event);
        (event.currentTarget as HTMLButtonElement).blur();
    };

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
        setIsConnected(false);
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1, }}>
            <Toolbar sx={{ position: "relative" }}>
                {/* ========== GAUCHE ========== */}
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleClick}
                    sx={{
                        position: "absolute",
                        left: 16,
                        "&.Mui-focusVisible": {
                            outline: "none",
                            boxShadow: "none",
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {/* ========== CENTRE (TOUJOURS PARFAITEMENT CENTRÉ) ========== */}
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <Link
                        to="/"
                        style={{
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        My App
                    </Link>
                </Typography>

                {/* ========== DROITE ========== */}
                {isConnected && (
                    <Box
                        sx={{
                            position: "absolute",
                            right: 16,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Typography>
                            {user ? `${user.firstname} ${user.lastname}` : "Invité"}
                        </Typography>

                        <IconButton onClick={logout}>
                            <LogoutIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
