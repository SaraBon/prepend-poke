import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { NamedAPIResource, Pokemon, PokemonClient } from 'pokenode-ts';
import React from 'react';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';


interface Props {
  pokemons: Pokemon[]
  currentPage: number,
  totalPages: number,
}

const Overview: NextPage<Props> = ({pokemons, currentPage, totalPages}) => {
  return  (
    <div>
      <div className={styles.container}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages}/>
    </div>
  )
}


export async function getStaticPaths() {
   // Todo: use totalPages variable, not 68
  const paths = Array.from({length: 68} as {length: number}, (_, index) => ({
    params: {page: `${index}` },
  }))
    return {
      paths,
      fallback: false
    };
  }

  export async function getStaticProps( params: any ) {
  
    const api = new PokemonClient();

    const results = await api.listPokemons((params.params.page - 1) * 16, 16)
    const pokemonList = results.results as NamedAPIResource[]
    const pokemons = await Promise.all(pokemonList.map(poke=> api.getPokemonByName(poke.name)))

    return {
      props: {
        pokemons,
        currentPage: params.params.page,
        totalPages: results && results.count/16, // ToDo use ceil() ?
      },
    }
  }
  
  export default Overview