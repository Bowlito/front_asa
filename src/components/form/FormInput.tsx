import { TextField } from "@mui/material";
import type{ FieldErrors, UseFormRegister } from "react-hook-form";

interface FormInputProps {
    register: UseFormRegister<any>;
    name: string;
    label: string;
    type?: string;
    errors: FieldErrors;
}

export default function FormInput({
    register,
    name,
    label,
    type = "text",
    errors,
    } : FormInputProps) {
    return (
        <TextField 
        label={label}
        type={type}
        fullWidth
        margin="normal"
        {...register(name,{required: true})}
        error={!!errors[name]}
        helperText={errors[name] ? "Ce champ est requis" : ""}
         />
    );
}