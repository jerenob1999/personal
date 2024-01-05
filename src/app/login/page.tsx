import React from 'react';
import LoginCard from '@/app/login/_components/Card';
import style from './page.module.css';

function page() {
  return (
    <div className={`${ style.page } background--gradiant`}>
      <LoginCard/>
    </div>
  );
}

export default page;
