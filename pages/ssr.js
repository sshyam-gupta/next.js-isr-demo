import Welcome from "../src/components/Welcome";
import { server } from "../src/config";

export default function SSR({ data }) {
  return <Welcome {...data} />;
}

// Called on the server after each request
export async function getServerSideProps() {
  try {
    const res = await fetch(`${server}/api/hello`);
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching  data", error);
  }
}
