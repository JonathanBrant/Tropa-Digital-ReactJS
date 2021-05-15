import styles from "./styles.module.scss";
import { Content } from '../content/index'
import MenuContainer from "../menuContainer";
import Header from "../header";

export function Home() {
    return (
        <div className={styles.container}>
            <MenuContainer />
            <div>
                <Header />
                <Content />
            </div>
        </div>
    )
}

