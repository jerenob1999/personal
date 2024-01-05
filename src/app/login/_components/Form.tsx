'use client';

import React from 'react';
import { Typography, Button, CardActions } from '@mui/material';
import InputField from '@/components/Form/Input';
import style from './card.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register } = useForm();
  
  return (
    <form>
      <InputField
        register={register}
        className={style.card__field} 
        label='username'
        placeholder='Type your username'
      />
      <InputField
        register={register}
        className={style.card__field}
        type='password' 
        label='password'
        placeholder='Type your password'
      />
      <Typography variant='caption'>
        <Link className={`${ style.card__link } link`} href={'/changepw'}>Forgot your password?</Link>
      </Typography>
      <CardActions>
        <Button className={`${ style.card__button } background--gradiant`} fullWidth >login</Button>
      </CardActions>
    </form>
  );
}

export default LoginForm;
