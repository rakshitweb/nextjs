import Link from 'next/link';
import classes from './page.module.scss';
import { GoBackButton } from '@/components';

export default async function FallBackPage() {
  return (
    <section className={classes.fallBackPage}>
      <main className="card">
        <div className="card__header primary-color">
          <h2 className="card--heading">Page Not Found</h2>
        </div>
        <p>The page you are looking for is not available.</p>
        <div className={classes.fallBackPage__actions}>
          <GoBackButton />
          <Link className="link" href="/">
            Home
          </Link>
        </div>
      </main>
    </section>
  );
}
