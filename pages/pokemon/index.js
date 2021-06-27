export default function Pokemon({ data }) {
  console.log(data);
  return (
    <ul>
      {data.map((pokemon) => (
        <li key={pokemon.name}>
          <p>{pokemon.name}</p>
        </li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    const data = await res.json();

    return {
      props: { data: data.results },
    };
  } catch (error) {
    console.error("Error fetching pokemon data", error);
  }
}
