import axios from 'axios'
import { useState, useEffect } from 'react'
import CardPokemon from '../components/CardPokemon'

import Loanding from '../components/Loading'

let maxPokemon = 13

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

const Home = () => {
  const [pokemons, setPokemon] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const getAllPokemon = () => {
    const endpoints = []

    for (let i = 1; i < maxPokemon; i++) {
      endpoints.push(`${pokeUrl}${i}`)
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setPokemon(res)
        setIsLoading(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  const handleClick = () => {
    maxPokemon += 13
    getAllPokemon()
  }
  return (
    <>
    {pokemons && (
      <main id='home'>
        {!isLoading  && <Loanding/> } 
        <div className="card-pokemon-container">
          {pokemons.map((poke, index) => (
            <CardPokemon poke={poke.data} key={index}></CardPokemon>
          ))}
        </div>
        <div>
          <button className="card-pokemon-button" onClick={handleClick}>
            Carregar mais Pokemon
          </button>
        </div>
      </main>
    )}
  </>
  )
}

export default Home
