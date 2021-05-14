import styles from "./styles.module.scss";
import { Menu } from '../menu/index';




export function Burguer() {
    return (
            <>
                <input id="burguer" className={styles.inputBurguer} type="checkbox" />
                <label htmlFor="burguer">
                    <div className={styles.menu}>
                        <span className={styles.hamburguer}></span>
                    </div>
                </label>
            </>
    )
}

