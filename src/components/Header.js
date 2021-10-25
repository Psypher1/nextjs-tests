import styles from "../styles/Header.module.css";
import Link from "next/link";

const links = [
  { name: "Home", target: "/" },
  { name: "Prologue", target: "/prologue" },
  { name: "Work", target: "/work" },
  { name: "Blog", target: "/blog" },
  { name: "About", target: "/about" },
  { name: "Epilogue", target: "/epilogue" },
];
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.target} passHref={true}>
                <a className={styles.navLink}>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

{
  /* 
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.target} passHref>
                <a className={styles.navLink}>{link.name}</a>
              </Link>
            </li>
          ))}
        */
}
