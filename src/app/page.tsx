import styles from './page.module.css';
import Link from 'next/link';
import { Routes } from '@/lib/types/routes';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div>
          <h1 className={styles.section__title}> Welcome to Express </h1>
          <h4 className={styles.section__subtitle}> The best way to organize your entrepreneurship </h4>
          <div className={styles.section__container}>
            <Link className='button button--default button--with-margin' href={Routes.LOGIN}>Login</Link>
            <Link className='button button--default button--with-margin' href={Routes.REGISTER}>Signup</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
