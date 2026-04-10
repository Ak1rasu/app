import styles from './Top10.module.css';
import {Top10Item} from './Top10Item.jsx';

export function Top10() {
    return(
        <section className={styles.top10}>
            <h2>Top 10 slechte openingszinnen</h2>
            <ol className={styles.list}>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
                <Top10Item/>
            </ol>

        </section>
    )
}