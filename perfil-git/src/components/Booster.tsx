import styles from './Booster.module.css'

export function Booster() {
    return (
        <div className={styles.booster}>
            <p className={styles.boosterTab}>Booster</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className={styles.pontuation}>
                <div className={styles.header}>
                    <div className={styles.name}>Tupython</div>
                    <div className={styles.nivel}>Nivel 0</div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.barName}>Logica de programação</div>
                    <div className={styles.bar}>
                        <div className={styles.progressBar}></div>
                    </div>
                    <div className={styles.number}>000</div>
                    <div className={styles.barName}>Possibilidade de emprego</div>
                    <div className={styles.bar}>
                        <div className={styles.progressBar}></div>
                    </div>
                    <div className={styles.number}>000</div>
                    <div className={styles.barName}>Vontade de chorar</div>
                    <div className={styles.bar}>
                        <div className={styles.progressBar}></div>
                    </div>
                    <div className={styles.number}>000</div>
                    <div className={styles.barName}>Vontade de desistir</div>
                    <div className={styles.bar}>
                        <div className={styles.progressBar}></div>
                    </div>
                    <div className={styles.number}>000</div>
                </div>
            </div>
        </div>
    )
}