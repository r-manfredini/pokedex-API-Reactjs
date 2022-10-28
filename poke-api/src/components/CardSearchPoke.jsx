const CardSearchPokemon = (pokemon) => {
  const typesPokemon = []
  pokemon.poke.types.map((type) => typesPokemon.push(type.type.name))

  return (
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
      <h3 className="card-pokemon-name">{pokemon.poke.name}</h3>
      <div className="card-pokemon-types">{typesPokemon.join(' | ')}</div>
    </div>
  )
}

export default CardSearchPokemon
