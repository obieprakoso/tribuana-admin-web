import React, { useState } from "react";
// import { LoadingButton } from "@mui/material";

interface TextInputProps {
    name: string;
    value: any;
    placeholder?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
    label?: string;
    error?: string | boolean | undefined | null;
    variant?: "outlined" | "standard" | "filled";
    id?: string;
    setIcon: boolean;
    required: boolean;
}

function TextInput({
    name,
    value,
    placeholder,
    onChange,
    label,
    error,
    setIcon,
    variant,
    required,
    id,
}: TextInputProps) {
    return (
        <div>

        </div>
    );
}

export default TextInput;
