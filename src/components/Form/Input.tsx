'use client';

import { HTMLInputTypeAttribute } from "react";
import { TextField } from '@mui/material';

interface Props {
  label: string
  placeholder: string
  className: string
  register: any
  type?: HTMLInputTypeAttribute
}

function InputField({ label, placeholder, className, register, type } : Props) {
  return (
    <TextField
      {...register}      
      className={className}
      fullWidth
      type={type}
      InputLabelProps={{ shrink: true }}
      variant='standard'
      label={label}
      placeholder={placeholder}
    />
  );
}

export default InputField;
