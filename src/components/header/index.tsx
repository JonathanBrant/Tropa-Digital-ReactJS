import { useState } from 'react'
import Burguer from "../burguerMenu"
import styles from './styles.module.scss'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={styles.welcomeMessage}>
            <p>Olá <span>Usuário</span></p>
            <Burguer handleClick={handleClick} />
            {menuIsOpen && (
                <div className={styles.menuBurguer}>
                    <img className={styles.imagetoggle} src="logomenu.svg" alt="Tropa Digital" />
                    <ul>
                        <li>
                            <button className={styles.buttonToggle}> <img src="home.svg" alt="Início" className={styles.image2} /> Início</button>
                        </li>
                        <li>
                            <button className={styles.buttonToggle}> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                        </li>
                        <li>
                            <button className={styles.buttonToggle}> <img src="relatorio.svg" alt="Relatórios" className={styles.image2} /> Relatórios</button>
                        </li>
                        <li>
                            <button className={styles.buttonToggle}> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                        </li>
                        <li>
                            <button className={styles.buttonToggle}> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                        </li>
                        <li>
                            <button className={styles.buttonToggle}> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header;