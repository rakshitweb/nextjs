import classes from './page.module.scss';

export default async function SignInPage() {
  const res = await fetch('/api/something');
  console.log(res);
  return (
    <section className={classes.page}>
      <main className="card">
        <div className="card__header">
          <h2 className="card__header--heading text-center primary-color">
            Sign In
          </h2>
        </div>
        <form className="form">
          <div className="form__group">
            <label className="form__group--label" htmlFor="username">
              Username
            </label>
            <input type="text" required className="form__group--input" />
          </div>
          <div className="form__group">
            <label className="form__group--label" htmlFor="username">
              Password
            </label>
            <input type="password" required className="form__group--input" />
          </div>
          <div className="form__actions">button</div>
        </form>
      </main>
    </section>
  );
}
