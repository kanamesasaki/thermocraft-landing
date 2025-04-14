// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { View } from '../App'; // App.tsxからView型をインポート

interface FooterProps {
  changeView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ changeView }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <button onClick={() => changeView('contact')} className={styles.linkButton}>
          Contact
        </button>
        <button onClick={() => changeView('terms')} className={styles.linkButton}>
          Terms & Conditions
        </button>
      </div>
      <div className={styles.copyright}>
        © 2025 K. Sasaki
      </div>
    </footer>
  );
};

export default Footer;