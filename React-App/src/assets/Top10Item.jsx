import styles from './Top10Item.module.css'

export function Top10Item(){
    return(
        <li className={styles.book}>
            <div className={styles.number}>1</div>
            <div className={styles.bookInfo}>
                <h3>The Final Empire</h3>
                <h4>Brandon Sanderson</h4>
            </div>
        </li>
    )
}
