import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink name="News" href="/news" />
          </li>
          <li>
            <NavLink name="Archive" href="/archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
