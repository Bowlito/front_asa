import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FormInput from "../formComponents/FormInput.tsx";
import FormButton from "../formComponents/FormButton.tsx";
import api from "../../api/api.ts";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useGlobalContext } from "../../context/GlobalContext.tsx";
import type { UserType } from "../../types/UserType.ts";

interface LoginFormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { setUser, setIsConnected } = useGlobalContext();

    const onLogin = (data: LoginFormData) => {
        api.post("/auth/login", data)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                console.log(res.data.user);

                setUser(res.data.user as UserType);
                setIsConnected(true);
                enqueueSnackbar("Connexion réussie", { variant: "success" });
                navigate("/");
            })
            .catch((err) => {
                setError("Identifiants incorrects");
                enqueueSnackbar("Identifiants incorrect", { variant: "error" });
                console.log(err.message);
            });
    };

    return (
        <Box>
            <Typography variant="h5" mb={2} textAlign="center">
                Connexion
            </Typography>

            <form onSubmit={handleSubmit(onLogin)}>
                <FormInput
                    register={register}
                    name="email"
                    label="Email"
                    type="email"
                    errors={errors}
                />

                <FormInput
                    register={register}
                    name="password"
                    label="Mot de passe"
                    type="password"
                    errors={errors}
                />

                <FormButton>Se connecter</FormButton>

                {error && (
                    <Typography color="error" textAlign="center" mt={2}>
                        {error}
                    </Typography>
                )}
            </form>
            <Typography variant="body1" textAlign={"center"} mt={2}>
                Pas encore de compte?
                <Link to={"/register"}> S'inscrire </Link>
            </Typography>
        </Box>
    );
}
