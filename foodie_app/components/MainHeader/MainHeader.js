import Link from "next/link";
import Image from 'next/image'
import logoImage from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import HeaderBackground from '../HeaderBackground/HeaderBackground';
import NavLink from "./NavLink";

export default function MainHeader() {
    return <>
        <HeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImage} alt="Food" priority />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href="/meals">Browse Meals</NavLink></li>
                    <li><NavLink href="/community">Foodie Community</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
}