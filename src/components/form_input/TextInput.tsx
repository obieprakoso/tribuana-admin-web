import React, { useState } from "react";
import { TextField } from "@mui/material";

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
      <label className="font-medium">{label}</label>
      <TextField
        name={name}
        required={required}
        onChange={onChange}
        error={error ? true : false}
        value={value}
        placeholder={placeholder}
        type={"text"}
        size="small"
        margin="dense"
        helperText={error}
        // InputProps={{
        //   endAdornment: setIcon ? (
        //     <InputAdornment position="end">
        //       <AlternateEmailOutlinedIcon color={error ? "error" : "inherit"} />
        //     </InputAdornment>
        //   ) : null,
        // }}
        fullWidth
      />
    </div>
  );
}

export default TextInput;
