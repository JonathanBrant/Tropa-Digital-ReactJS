import styles from "./styles.module.scss";
import { Link } from 'react-router-dom'


export function Login() {
  return (
    <div className={styles.background}>
    <div className={styles.loginContainer}>
      <div className={styles.firstContent}>
        <img src="logo.svg" className={styles.image1} alt="Tropa Digital" />
        <h2>Bem Vindo ao <span>painel</span></h2>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          className={styles.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className={styles.password}
        />
        <Link to="/home"><button type="button">Acessar</button></Link>
      </div>
      <div className={styles.secondContent}>
        <img src="notebook.svg" className={styles.image2} alt="" />
      </div>
    </div>
    </div>
  );
}
