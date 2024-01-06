'use client';

import React from 'react';
import { Button, CardActions } from '@mui/material';
import InputField from '@/components/Form/Input';
import style from '../../login/_components/card.module.css';
import { useForm } from 'react-hook-form';

function SignupForm() {
  const { register } = useForm();
  
  return (
    <form>
      <InputField
        register={register}
        className={style.card__field} 
        label='email'
        placeholder='Type your username'
      />
      <InputField
        register={register}
        className={style.card__field} 
        label='username'
        placeholder='Type your username'
      />
      <InputField
        register={register}
        className={style.card__field} 
        label='phone'
        placeholder='Type your phone number'
        type='tel'
      />
      <InputField
        register={register}
        className={style.card__field}
        type='password' 
        label='password'
        placeholder='Type your password'
      />
      <CardActions>
        <Button className={`${ style.card__button } background--gradiant`} fullWidth >Signup</Button>
      </CardActions>
    </form>
  );
}

export default SignupForm;
