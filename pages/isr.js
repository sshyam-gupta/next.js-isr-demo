export default function ISRPage({ data }) {
  return (
    <section>
      <h2>{data.setup}</h2>
      <p>{data.delivery}</p>
    </section>
  );
}

// Called at build and run-time
export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    );
    const data = await res.json();

    return {
      props: { data },
      // Re-validates the page every 15 seconds
      revalidate: 20,
    };
  } catch (error) {
    console.error("Error fetching jokes data", error);
  }
}
