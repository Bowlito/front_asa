import { Box } from "@mui/material";
import LoginForm from "../components/auth/LoginForm.tsx";

export default function Login() {



    return (
        <Box
            sx={{
                width: { xs: "90%", sm: "60%", md: "40%", lg: "30%" },
                maxWidth: "400px",
                margin: "auto",
                padding: 3,
                mt: { xs: 4, sm: 8 },
                boxShadow: 3,
                borderRadius: 2,
            }}>
            <LoginForm />
        </Box>
    )
}