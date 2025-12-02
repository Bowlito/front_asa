// components/Layout/Header.tsx
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
    onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onMenuClick) onMenuClick(event);
        // retire le focus pour supprimer le halo noir
        (event.currentTarget as HTMLButtonElement).blur();
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleClick}
                    sx={{
                        mr: 2,
                        "&.Mui-focusVisible": {
                            outline: "none",
                            boxShadow: "none",
                        },

                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{width: "93%", textAlign:"center"}} noWrap >
                    
                        My App
                    
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
