import { Button } from "@mui/material";
import type{ ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
};

export default function FormButton({children}: FormButtonProps) {
    return (
        <Button 
        type="submit"
        variant="contained"
        fullWidth
        sx={{mt: 2}}>
            {children}
        </Button>
    );
}