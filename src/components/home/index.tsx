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

            <div className={styles.menuToggle} >
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

            <main className={styles.bannerContainer}>
                <div className={styles.welcomeMessage}>
                    <p>Olá <span>Usuário</span></p>
                </div>
                <section className={styles.sectionBanner}>
                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}> <p>2min atrás</p></p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h3>Lorem Ipsum is simply dummy text of the printing...</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </article>

                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}> <p>2min atrás</p></p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h3>Lorem Ipsum is simply dummy text of the printing...</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </article>

                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}> <p>2min atrás</p></p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h3>Lorem Ipsum is simply dummy text of the printing...</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </article>

                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}> <p>2min atrás</p></p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h3>Lorem Ipsum is simply dummy text of the printing...</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </article>

                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}> <p>2min atrás</p></p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h3>Lorem Ipsum is simply dummy text of the printing...</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </article>

                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}> <p>2min atrás</p></p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h3>Lorem Ipsum is simply dummy text of the printing...</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing...</p>
                        </div>
                    </article>
                </section>
            </main>

        </div>
    )
}

