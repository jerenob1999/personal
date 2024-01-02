import React from 'react';
import Login from '@/components/login/Login';
import style from './page.module.css';

function page() {
  return (
    <div className={`${ style.page } background--gradiant`}>
      <Login/>
    </div>
  );
}

export default page;
