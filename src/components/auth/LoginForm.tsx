import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import api from "../../api/api.ts";

interface LoginFormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const [error, setError] = useState("");

    const onLogin = async (data: LoginFormData) => {
        setError("");

        try {
            const res = await api.post("/auth/login", data);
            localStorage.setItem("token", res.data.token);
            console.log("Connexion réussie !");
        } catch (err: any) {
            setError(err.response?.data?.message || "Erreur serveur");
        }
    };

    return (
        <Box>
            <Typography variant="h6" mb={2} textAlign="center">
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
        </Box>
    );
}
