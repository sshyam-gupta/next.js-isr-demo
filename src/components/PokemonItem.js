function PokemonItem(pokemon) {
  return (
    <section>
      <h1>{pokemon.name}</h1>
      <img
        alt={pokemon.name}
        width="250px"
        src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
      />
      <p>
        {pokemon.types.length
          ? pokemon.types.map((type) => (
              <code key={type.type.name}>{type.type.name}</code>
            ))
          : null}
      </p>
    </section>
  );
}

export default PokemonItem;
