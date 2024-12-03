import Link from 'next/link';
import classes from './navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <Link href="/" className="link link--active">
                Blogify
            </Link>
            <ul className={classes.navbar__list}>
                <li className={classes['navbar__list--item']}>
                    <Link href="/signin" className="link">
                        Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
