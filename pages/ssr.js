import Welcome from "../src/components/Welcome";

export default function SSR({ data }) {
  return <Welcome {...data} />;
}

// Called on the server after each request
export async function getServerSideProps() {
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
