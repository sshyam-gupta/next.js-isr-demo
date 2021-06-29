import Welcome from "../src/components/Welcome";

export default function SSG({ data }) {
  return <Welcome {...data} />;
}

// Called at build time
export async function getStaticProps() {
  try {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/Asia/Kolkata`
    );
    const data = await res.json();

    return {
      props: {
        data: {
          ...data,
          time: new Date(data.datetime).toLocaleTimeString(),
        },
      },
    };
  } catch (error) {
    console.error("Error fetching  data", error);
  }
}
