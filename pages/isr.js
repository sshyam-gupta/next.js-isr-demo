import Welcome from "../src/components/Welcome";

export default function ISR({ data }) {
  return <Welcome {...data} />;
}

// Called at build and run-time
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
      revalidate: 15,
    };
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
