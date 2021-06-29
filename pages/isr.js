import Welcome from "../src/components/Welcome";
import { server } from "../src/config";

export default function ISR({ data }) {
  return <Welcome {...data} />;
}

// Called at build and run-time
export async function getStaticProps() {
  try {
    const res = await fetch(`${server}/api/hello`);
    const data = await res.json();

    return {
      props: { data },
      revalidate: 15,
    };
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
