import PokemonItem from "../../src/components/PokemonItem";

export default function SSRPage({ data }) {
  return <PokemonItem {...data} />;
}

// Called on the server after each request
export async function getServerSideProps({ params }) {
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
