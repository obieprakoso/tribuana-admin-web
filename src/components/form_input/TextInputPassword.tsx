import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface TextInputPasswordProps {
  name: string;
  value: any;
  placeholder?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  label?: string;
  error?: string | boolean | undefined | null;
  id?: string;
  required: boolean;
}

function TextInputPassword({
  name,
  value,
  placeholder,
  onChange,
  label,
  error,
  id,
  required,
}: TextInputPasswordProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
        type={showPassword ? "text" : "password"}
        size="small"
        margin="dense"
        helperText={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() =>
                  showPassword ? setShowPassword(false) : setShowPassword(true)
                }
              >
                {showPassword ? (
                  <VisibilityOffIcon color={error ? "error" : "inherit"} />
                ) : (
                  <VisibilityIcon color={error ? "error" : "inherit"} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </div>
  );
}

export default TextInputPassword;
