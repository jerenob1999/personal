import React from 'react';
import { Card, CardHeader, CardContent, TextField, Typography, Button, Avatar, AvatarGroup, CardActions } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import style from './login.module.css';
import Link from 'next/link';

function Login() {
  return (
    <Card className={style.card}>
      <CardHeader titleTypographyProps={{ className: style.card__header }} align='center' title='Login'/>
      <CardContent>
        <TextField
          className={style.card__field}
          fullWidth 
          InputLabelProps={{ shrink: true }} 
          variant='standard'
          label='username'
          placeholder='Type your username'
        />
        <TextField
          className={style.card__field}
          fullWidth 
          InputLabelProps={{ shrink: true }}
          variant='standard'
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
        <div className={style.card__signup}>
          <Typography align='center' variant='caption'>
          Or Sign Up Using
          </Typography>
          <AvatarGroup className={style.card__media} spacing={0}>
            <Avatar className={style.tw__logo}>
              <TwitterIcon/>
            </Avatar>
            <Avatar className={style.google__logo}>
              <GoogleIcon/>
            </Avatar>
          </AvatarGroup>
        </div>
        <div className={`${ style.card__signup } ${ style.card__signup__end }`}>
          <Typography align='center' variant='caption'>
          Or Sign Up Using
          </Typography>
          <Typography variant='subtitle2'>
            <Link className={`${ style.card__media } link`} href={'/changepw'}>SIGN UP</Link>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Login;
