import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInput from "../formComponents/FormInput.tsx";
import FormButton from "../formComponents/FormButton.tsx";
import type { AdherentType } from "../../types/AdherentType.ts";
import api from "../../api/api.ts";
import { useSnackbar } from "notistack";
import { useGlobalContext } from "../../context/GlobalContext.tsx";

export default function AdherentsForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AdherentType>();

    const { enqueueSnackbar } = useSnackbar();
    const {user} = useGlobalContext()

    function onSubmit(data: AdherentType) {

        if (!user) {
            enqueueSnackbar("Vous devez être connecté.", {
                    variant: "error",
                })
            return
        }
        api.post("/adherents", {...data, userId: user.id})
            .then(() => {
                enqueueSnackbar("Adhérent créé avec succès !", {
                    variant: "success",
                }),
                reset();
            })
            .catch((error) => enqueueSnackbar(`Erreur ${error.message}`, {variant: error}));
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: 400, // largeur plus compacte
                width: "100%",
                mx: "auto",
                mt: 2, // moins d'espace au dessus
                px: 2,
            }}
        >
            <Typography variant="h6" mb={1} textAlign="center">
                Ajouter un adhérent
            </Typography>

            {/* Champs simples */}
            <FormInput
                register={register}
                name="firstname"
                label="Prénom"
                errors={errors}
            />
            <FormInput
                register={register}
                name="lastname"
                label="Nom"
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
                name="phone"
                label="Téléphone"
                errors={errors}
            />

            {/* Adresse */}
            <FormInput
                register={register}
                name="address.street"
                label="Rue"
                errors={errors}
            />
            <FormInput
                register={register}
                name="address.zipCode"
                label="Code postal"
                errors={errors}
            />
            <FormInput
                register={register}
                name="address.city"
                label="Ville"
                errors={errors}
            />
            <FormInput
                register={register}
                name="address.country"
                label="Pays"
                errors={errors}
            />

            <FormButton>Ajouter</FormButton>
        </Box>
    );
}
