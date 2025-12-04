import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FormInput from "../formComponents/FormInput.tsx";
import FormButton from "../formComponents/FormButton.tsx";
import api from "../../api/api.ts";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

interface UserRegister {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserRegister>();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({});

    const onRegister = (data: UserRegister) => {
        api.post("/users", data)
            .then((res) => {
                (setNewUser(res.data),
                    console.log(res.data),
                    enqueueSnackbar("Utilisateur créé avec succès !", {
                        variant: "success",
                    }),
                    navigate("/login"),
                    reset());
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <Box>
            <Typography variant="h5" mb={2} textAlign="center">
                Inscription
            </Typography>
            <form onSubmit={handleSubmit(onRegister)}>
                <FormInput
                    register={register}
                    name="firstname"
                    label="Prénom"
                    type="firstname"
                    errors={errors}
                />
                <FormInput
                    register={register}
                    name="lastname"
                    label="Nom"
                    type="lastname"
                    errors={errors}
                />
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

                <FormButton>S'inscrire</FormButton>
            </form>
        </Box>
    );
}
