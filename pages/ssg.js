export default function SSGPage({ data }) {
  return (
    <section>
      <h2>{data.setup}</h2>
      <p>{data.delivery}</p>
    </section>
  );
}

// Called at build time
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    );
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching jokes data", error);
  }
}
