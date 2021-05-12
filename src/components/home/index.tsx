import styles from "./styles.module.scss";

export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.menuContainer}>
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
            <div className={styles.content}>
                <h2 className={styles.welcome}>Olá <span>Usuário</span></h2>
                <div className={styles.imageContainer}>
                    <div>
                        <img src="image.svg" alt="" />
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesettin..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin..</p>
                    </div>
                    <div>
                        <img src="image.svg" alt="" />
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesettin..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin..</p>
                    </div>
                    <div>
                        <img src="image.svg" alt="" />
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesettin..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin..</p>
                    </div>
                    <div>
                        <img src="image.svg" alt="" />
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesettin..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin..</p>
                    </div>
                    <div>
                        <img src="image.svg" alt="" />
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesettin..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin..</p>
                    </div>
                    <div>
                        <img src="image.svg" alt="" />
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesettin..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettin..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}