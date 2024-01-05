import React from 'react';
import { Card, CardHeader, CardContent, Typography, Avatar, AvatarGroup } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import style from './card.module.css';
import Link from 'next/link';
import LoginForm from './Form';

function LoginCard() {
  return (
    <Card className={style.card}>
      <CardHeader titleTypographyProps={{ className: style.card__header }} align='center' title='Login'/>
      <CardContent>
        <LoginForm/>
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

export default LoginCard;
