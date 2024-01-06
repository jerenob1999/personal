import React from 'react';
import style from './page.module.css';
import SignupCard from './_components/Card';

function page() {
  return (
    <div className={style.page}>
      <SignupCard/>
    </div>
  );
}

export default page;
