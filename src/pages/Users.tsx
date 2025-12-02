import { Typography, Box, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api/api";

interface User {
    id: string;
    email: string;
    role: string;
}

export default function Users() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        api
        .get("/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log("Impossible de récup les data : ", err))
    }, [])
    

    return(
        <Box sx={{p: 3}}>
            <Typography variant="h5">Liste des utilisateurs</Typography>
            <List>
                {users.map(u => 
                    <ListItem key={u.id}>{u.email}</ListItem>
                )}
                
            </List>
        </Box>
    );
}