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
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Prologue
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Work
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Blog
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>
              Epilogue
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

{
  /* >
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.target}>
                <a className={styles.navLink}>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul> */
}
