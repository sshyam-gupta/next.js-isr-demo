export default function SSRPage({ data }) {
  return (
    <section>
      <h1>{data.name}</h1>
      <img
        alt={data.name}
        width="250px"
        src={data.sprites?.other?.["official-artwork"]?.front_default}
      />
      <p>
        {data.types.length
          ? data.types.map((type) => (
              <code key={type.type.name}>{type.type.name}</code>
            ))
          : null}
      </p>
    </section>
  );
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
