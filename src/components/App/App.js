import React from "react";
import logo from '../../logo.svg';
import styles from './App.module.scss';
import Dropdown from "../Dropdown";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <Dropdown />
      </header>
    </div>
  );
}

export default App;
