// Sidebar.tsx

import { List, ListItemButton, ListItemText, Box, Toolbar } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { theme } from '../../theme/theme';

// Définition des items de la sidebar
interface SidebarItem {
    label: string;
    to: string;
}

const sidebarItems: SidebarItem[] = [
    { label: 'Home', to: '/' },
    { label: 'Dashboard', to: '/dashboard' },
    // ajoute d'autres pages ici si besoin
];

interface SidebarProps {
    onNavigate?: () => void; // optionnel
}

export default function Sidebar({ onNavigate }: SidebarProps) {
    const location = useLocation();

    return (
        <Box sx={{ width: 240, bgcolor: '#f5f7f5', height: '100%', overflowX: 'hidden' }}>
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
                                color: isSelected ? theme.palette.primary.light : theme.palette.primary.main,
                                bgcolor: isSelected ? 'primary.main' : 'transparent',
                                borderRadius: 1,
                                my: 0.5,
                                '&:hover': {
                                    bgcolor: isSelected
                                        ? theme.palette.primary.main
                                        : 'rgba(102,181,102,0.1)',
                                    color: theme.palette.primary.dark,
                                },
                                '&.Mui-focusVisible': {
                                    bgcolor: 'rgba(102,181,102,0.15)',
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
