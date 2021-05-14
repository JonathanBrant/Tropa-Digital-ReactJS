import styles from "./styles.module.scss";
import { Menu } from '../menu/index'
import { Content } from '../content/index'


export function Home() {
    return (
        <div className={styles.container}>
            <Menu />
            <Content />
        </div>
    )
}

