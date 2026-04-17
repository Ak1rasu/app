import styles from './Top10.module.css';
import { Top10Item } from './Top10Item.jsx';

export function Top10() {
    const top10 = [
        { title: "Avengers: Endgame", director: "Russo Brothers" },
        { title: "Avengers: Infinity War", director: "Russo Brothers" },
        { title: "Captain America: The Winter Soldier", director: "Russo Brothers" },
        { title: "Guardians of the Galaxy", director: "James Gunn" },
        { title: "Spider-Man: No Way Home", director: "Jon Watts" },
        { title: "Thor: Ragnarok", director: "Taika Waititi" },
        { title: "Black Panther", director: "Ryan Coogler" },
        { title: "Iron Man", director: "Jon Favreau" },
        { title: "Doctor Strange", director: "Scott Derrickson" },
        { title: "Captain America: Civil War", director: "Russo Brothers" }
];

    return(
        <section className={styles.top10}>
            <h2>Top 10 Favorite Marvel Movies</h2>
            <ol className={styles.list}>
                {top10.map((movie, i) => {
                    return (
                        <Top10Item
                            key={movie.title + movie.director}
                            title={movie.title}
                            author={movie.director}
                            number={i + 1}
                        />
                    );
                })}
            </ol>
        </section>
    );
}