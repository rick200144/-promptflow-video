'use client';

import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h1 className={styles.logo}>🎬 PromptFlow Video</h1>
          <p className={styles.tagline}>Create stunning AI videos in seconds</p>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            Features
          </a>
          <a href="#" className={styles.navLink}>
            Docs
          </a>
          <a href="#" className={styles.navLink}>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
