"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          Все котики
        </Link>
        <Link
          href="/favorites"
          className={`${styles.link} ${pathname === "/favorites/" ? styles.active : ""}`}
        >
          Любимые котики
        </Link>
      </nav>

      <ThemeToggle />
    </header>
  );
};

export default Header;
