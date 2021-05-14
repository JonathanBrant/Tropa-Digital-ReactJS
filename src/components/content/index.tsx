import { Burguer } from "../burguerMenu";
import styles from "./styles.module.scss";

export function Content() {
    return (
        <>
        <Burguer />
        <div className={styles.container}>                
            <main className={styles.bannerContainer}>
                <div className={styles.welcomeMessage}>
                    <p>Olá <span>Usuário</span></p>
                </div>
                <section className={styles.sectionBanner}>
                    <article className={styles.banner}>
                        <div className={styles.imagesBanner}>
                            <img src="image.svg" alt="" />
                            <div className={styles.days}>
                                <p className={styles.timeAgo}>  <p>2min atrás</p></p>
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
        </>
    )
}

