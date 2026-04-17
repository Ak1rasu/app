import styles from './Top10item.module.css'

export function Top10Item(props){
    return (
    <li className={styles.item}>
        <span className={styles.number}>{props.number}.</span>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.author}>{props.author}</span>
    </li>
    )
}
