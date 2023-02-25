import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

interface TextInputProps {
  name: string;
  value: any;
  placeholder?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  label?: string;
  error?: string | boolean | undefined | null;
  id?: string;
  required: boolean;
}

function TextInput({
  name,
  value,
  placeholder,
  onChange,
  label,
  error,
  id,
  required,
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
        type="email"
        size="small"
        margin="dense"
        helperText={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AlternateEmailOutlinedIcon color={error ? "error" : "inherit"} />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </div>
  );
}

export default TextInput;
