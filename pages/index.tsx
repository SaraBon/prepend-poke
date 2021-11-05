import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React from 'react';
import Link from 'next/link'


const Home: NextPage = () => {


  return  (
    <div className={styles.start}>
      <Link href="/[page]" as={"/1"}>
           <a><div className={styles.startButton}>Click here to check out Pokemons!</div></a>
      </Link>
    </div>
 
  )
}




export default Home
