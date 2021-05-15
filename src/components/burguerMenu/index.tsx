import React from 'react';
import styles from "./styles.module.scss";

interface BurguerInterface {
    handleClick: () => void
}

const Burguer: React.FC<BurguerInterface> = ({ handleClick }) => {

    return (
        <div>
            <input id="burguer" className={styles.inputBurguer} type="checkbox" onClick={handleClick} />
            <label htmlFor="burguer">
                <div className={styles.menu}>
                    <span className={styles.hamburguer}></span>
                </div>
            </label>
        </div>
    )
}

export default Burguer;
