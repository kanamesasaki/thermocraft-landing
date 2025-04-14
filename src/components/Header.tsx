import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { View } from '../App';

interface HeaderProps {
  changeView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ changeView }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <button onClick={() => changeView('home')} className={styles.titleButton}>
        <div className={styles.logo} aria-hidden="true"></div>
        <h1>ThermoCraft&nbsp;&nbsp; <span>Spacecraft Thermal Tools</span></h1>
      </button>
    </header>
  );
};

export default Header;