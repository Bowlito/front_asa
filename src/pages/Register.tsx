import RegisterForm from "../components/auth/RegisterForm.tsx";
import { Box } from "@mui/material";

export default function Register() {
    return(
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
                    <RegisterForm />
                </Box>
    )
}