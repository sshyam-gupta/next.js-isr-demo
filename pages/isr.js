import Welcome from "../src/components/Welcome";

export default function ISR({ data }) {
  return <Welcome {...data} />;
}

// Called at build and run-time
export async function getStaticProps() {
  try {
    const res = await fetch(`https://next-js-isr-demo.vercel.app/api/hello`);
    const data = await res.json();

    return {
      props: {
        data,
      },
      revalidate: 15,
    };
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
