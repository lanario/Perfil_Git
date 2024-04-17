import styles from './Habilities.module.css'

export function Habilities() {
    return (
        <aside className={styles.aside}>
            <div className={styles.habilities}>
                <p>Habilidades</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <li className={styles.description}>Description</li>
            </div>
        </aside>
    )
}