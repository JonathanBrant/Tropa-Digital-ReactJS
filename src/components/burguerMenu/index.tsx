import styles from "./styles.module.scss";

export function Burguer() {
    return (
        <div className={styles.menuToggle}>
            <div className={styles.toggleContainer} >
                <img className={styles.image} src="logomenu.svg" alt="Tropa Digital" />
                <ul>
                    <li>
                        <button> <img src="home.svg" alt="Início" className={styles.image2} /> Início</button>
                    </li>
                    <li>
                        <button> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                    </li>
                    <li>
                        <button> <img src="relatorio.svg" alt="Relatórios" className={styles.image2} /> Relatórios</button>
                    </li>
                    <li>
                        <button> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                    </li>
                    <li>
                        <button> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                    </li>
                    <li>
                        <button> <img src="contact.svg" alt="Contatos" className={styles.image2} /> Contatos</button>
                    </li>
                </ul>
            </div>
        </div>


    )
}

