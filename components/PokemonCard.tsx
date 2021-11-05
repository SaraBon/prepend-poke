import { Pokemon } from "pokenode-ts"
import { useEffect, useState } from "react"
import styles from './index.module.css'


interface Props {
  pokemon: Pokemon
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)

useEffect(() => {
    setShowDetails(false)
}, [pokemon])

  return (
    <div className={styles.pokeWrap} onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? (
            <div className={styles.pokeDetails}>
                <div>
                SPECIES:<span style={{color: "grey"}}> {pokemon.species.name} </span>
                </div>
                <div>
                BASE STAT: <span style={{color: "grey"}}> {pokemon.stats.length && pokemon.stats[0].base_stat}</span>
                </div>
                <div>
                MAIN TYPE:<span style={{color: "grey"}}> { pokemon.types.length && pokemon.types[0].type.name}</span>
                </div>
                <div>
                WEIGHT: <span style={{color: "grey"}}>{pokemon.weight}</span>
                </div>
                <div>
                MAIN MOVE: <span style={{color: "grey"}}>{pokemon.moves.length && pokemon.moves[0].move.name}</span>
                </div>                
            </div>
        ) : (
            <>
                <img src={pokemon.sprites.front_default} />
                <div key={pokemon.id}>{pokemon.name}</div>
            </>
        )
    }      
      </div>
  )
}

export default PokemonCard
