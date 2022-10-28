import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import CardPokemon from '../components/CardPokemon'
import Loading from '../components/Loading'

const searchUrl = 'https://pokeapi.co/api/v2/pokemon/'

const Search = () => {
  const [searchParams] = useSearchParams()

  const [searchPokemon, setSearchPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const query = searchParams.get('q')

  const getSearchPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        setSearchPokemon(res.data)
        setError(null)
        setIsLoading(true)
      })
      .catch(() => {
        setError('Pokemon não encontrado')
        setSearchPokemon(null)
        setIsLoading(true)
      })
  }

  useEffect(() => {
    getSearchPokemon(`${searchUrl}${query}`)
  }, [query])

  return (
    <>
      {!isLoading && <Loading />}
      {searchPokemon ? (
        <main>{<CardPokemon poke={searchPokemon}></CardPokemon>} </main>
      ) : (
        <div className="msg-error">
          <img src="/icon-poke-red.png" alt="icon"></img><span>{error}</span>
        </div>
      )}
    </>
  )
}

export default Search
