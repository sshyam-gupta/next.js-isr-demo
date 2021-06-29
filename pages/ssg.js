import Welcome from "../src/components/Welcome";

export default function SSG({ data }) {
  return <Welcome {...data} />;
}

// Called at build time
export async function getStaticProps() {
  try {
    const res = await fetch(`https://next-js-isr-demo.vercel.app/api/hello`);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching  data", error);
  }
}
