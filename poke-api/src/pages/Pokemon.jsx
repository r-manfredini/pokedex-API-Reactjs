import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  const [types, setTypes] = useState(null)

  const [weaknesses, setWeaknesses] = useState(null)

  const getPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        setTypes(res.data.types)
        setPokemon(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const getPokeUrl = `${pokeUrl}${id}`
    getPokemon(getPokeUrl)
  }, [id])

  useEffect(() => {
    let testeArray = []
    if (types) {
      types.map((pokeTeste) => testeArray.push(pokeTeste.type.url))

      axios
        .get(testeArray[0])
        .then((res) =>
          setWeaknesses(res.data.damage_relations.double_damage_from),
        )
        .catch((error) => console.log(error))
    }
  }, [types])

  const filteredTypes = []

  if (pokemon) {
    pokemon.types.map((type) => {
      filteredTypes.push(type.type.name)
    })
  }

  return (
    <main>
      {pokemon !== null && (
        <div className="pokemon-details">
          <div className={`left-container ${filteredTypes[0]}`}>
            <div className="pokemon-details-img">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
          </div>
          <div className="right-container">
            <div className="pokemon-details-name">
              <h2>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1)}
              </h2>
              <span className="pokemon-details-id">
                #{pokemon.id.toString().padStart(3, '0')}
              </span>
            </div>
            <div className="pokemon-details-type">
              <ul>
                {pokemon &&
                  pokemon.types.map((poke, index) => (
                    <li key={index} className={`tag ${poke.type.name}`}>
                      {poke.type.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="pokemon-details-info">
              <ul>
                <li>
                  <span>Height</span>
                  <strong>{pokemon.height / 10} m</strong>
                </li>
                <li>
                  <span>Weight</span>
                  <strong>{pokemon.weight / 10} kg</strong>
                </li>
                <li>
                  <span>Abilities</span>
                  {pokemon.abilities.map((ability, index) => (
                    <strong key={index}>
                      {ability.ability.name.charAt(0).toUpperCase() +
                        ability.ability.name.substr(1)}{' '}
                    </strong>
                  ))}
                </li>
              </ul>
            </div>
            <div className="weaknesses">
              {weaknesses !== null && (
                <>
                  <span>Weaknesses</span>
                  <ul>
                    {weaknesses.map((w, i) => (
                      <li key={i} className={`tag ${w.name}`}>
                        {w.name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="stats">
              <span className="stats-title">Stats</span>
              {pokemon.stats.map((stat, index) => (
                <div key={index} className="stat-pokemon">
                  <span>
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.substr(1)}
                  </span>
                  <div className="progress-bar-container">
                    {stat.base_stat > 100 ? (
                      <div
                        className="progress-bar"
                        style={{ width: '100%' }}
                      ></div>
                    ) : (
                      <div
                        className="progress-bar"
                        style={{ width: stat.base_stat + '%' }}
                      ></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Pokemon
