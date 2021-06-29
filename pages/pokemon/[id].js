import PokemonItem from "../../src/components/PokemonItem";

export default function Pokemon({ data }) {
  return <PokemonItem {...data} />;
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching pokemon data", error);
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const pokemon = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = pokemon.results.map((pokemon, index) => ({
    params: { id: (index + 1).toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
