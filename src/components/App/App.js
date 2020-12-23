import React from "react";
import logo from '../../logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
