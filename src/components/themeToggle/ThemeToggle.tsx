"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleMount = () => setMounted(true);
    handleMount();
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.toggle_container} ${resolvedTheme === "dark" ? styles.dark : ""}`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <div className={styles.slider}>
        {resolvedTheme === "dark" ? (
          <Moon size={18} color="#f59e0b" />
        ) : (
          <Sun size={18} color="#f59e0b" />
        )}
      </div>
    </div>
  );
};
