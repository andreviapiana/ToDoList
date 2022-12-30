import styles from './Header.module.css';

import Rocket from '../assets/rocket.svg';
import Logo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.rocket} src={Rocket} alt="Logotipo do Foguete" />
      <img src={Logo} alt="Logotipo do ToDo List" />
    </header>
  );
}