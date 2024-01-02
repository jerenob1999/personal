'use client';

import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  label: string
  placeholder: string
  className: string
  register: any
}

function FormInput({ label, placeholder, className, register } : Props) {
  return (
    <TextField
      {...register}      
      className={className}
      fullWidth 
      InputLabelProps={{ shrink: true }}
      variant='standard'
      label={label}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
