import { Link } from 'react-router-dom'

const CardPokemon = (pokemon) => {
  const typesPokemon = []
  pokemon.poke.types.map((type) => typesPokemon.push(type.type.name))

  return (
    <>
      {
        <Link className="poke-link" to={`/pokemon/${pokemon.poke.name}`}>
          <div className={`card-pokemon ${pokemon.poke.types[0].type.name}`}>
            <div className="card-pokemon-img">
              <img
                src={pokemon.poke.sprites.other.dream_world.front_default}
                alt=""
              />
            </div>
            <span className="card-pokemon-id">
              #{pokemon.poke.id.toString().padStart(3, '0')}
            </span>
            <h2 className="card-pokemon-name">
              {pokemon.poke.name.charAt(0).toUpperCase() +
                pokemon.poke.name.substr(1)}
            </h2>
            <div className="card-pokemon-types">{typesPokemon.join(' | ')}</div>
          </div>
        </Link>
      }
    </>
  )
}

export default CardPokemon
