import { Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import api from "../api/api";

interface User {
    _id: string;
    firstname: string;
    lastname: string;
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

    const columns: GridColDef[] = [
        
        { field: "lastname", headerName: "Nom", flex: 1 },
        { field: "firstname", headerName: "Prénom", flex: 1 },
        { field: "email", headerName: "E-mail", flex: 1 },
        { field: "role", headerName: "Rôle", flex: 1 }
    ];


    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5">Liste des utilisateurs</Typography>
            <Box sx={{ minWidth: "70vw", width: "100%", mt: 5}}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{textAlign: "center"}} />
            </Box>
        </Box>
    );
}