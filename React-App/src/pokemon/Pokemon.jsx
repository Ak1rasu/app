import { useState, useEffect } from 'react'
import styles from './pokemon.module.css'

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
}

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null)
  const [species, setSpecies] = useState(null)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const fetchPokemon = (idOrName) => {
    setError(null)
    setPokemon(null)
    setSpecies(null)
    fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
      .then((response) => {
        if (!response.ok) throw new Error('Pokemon not found')
        return response.json()
      })
      .then((data) => {
        setPokemon(data)
        return fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.name}`)
      })
      .then((response) => response.json())
      .then((data) => setSpecies(data))
      .catch((err) => setError(err.message))
  }

  const fetchRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 1010) + 1
    fetchPokemon(randomId)
  }

  useEffect(() => {
    fetchRandomPokemon()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      fetchPokemon(search.trim().toLowerCase())
    }
  }

  if (error) {
    return (
      <section className={styles.pokemon}>
        <h2>Error: {error}</h2>
        <button onClick={fetchRandomPokemon}>Try Again</button>
      </section>
    )
  }

  if (!pokemon) {
    return (
      <section className={styles.pokemon}>
        <h2>Fetching Pokemon...</h2>
      </section>
    )
  }

  const stabMoves = pokemon.moves.filter(move =>
    pokemon.types.some(type => type.type.name === move.move.name.split('-')[0] || false) // rough check
  )

  return (
    <section className={styles.pokemon}>
      <form className={styles.search} onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Pokemon by name or ID"
        />
        <button type="submit">Search</button>
      </form>
      <h2 className={styles.name}>{pokemon.name}</h2>
      {pokemon.sprites && pokemon.sprites.front_default ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <p>No image available</p>
      )}
      <div className={styles.types}>
        {pokemon.types.map((typeInfo, index) => (
          <span
            key={index}
            className={styles.type}
            style={{
              backgroundColor: typeColors[typeInfo.type.name] || '#ccc'
            }}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
      {species && species.flavor_text_entries && species.flavor_text_entries[0] && (
        <div className={styles.description}>
          <h3>Description:</h3>
          <p>{species.flavor_text_entries[0].flavor_text}</p>
        </div>
      )}
      <div className={styles.moves}>
        <h3>Moves (Level-up):</h3>
        <ul>
          {pokemon.moves
            .filter(move => move.version_group_details.some(vgd => vgd.move_learn_method.name === 'level-up'))
            .map((move, index) => {
              const isStab = pokemon.types.some(type => type.type.name === move.type?.name)
              return (
                <li key={index} className={isStab ? styles.stab : ''}>
                  {move.move.name} (Level {move.version_group_details.find(vgd => vgd.move_learn_method.name === 'level-up')?.level_learned_at})
                </li>
              )
            })}
        </ul>
      </div>
      <button onClick={fetchRandomPokemon}>Get Random Pokemon</button>
    </section>
  )
}
