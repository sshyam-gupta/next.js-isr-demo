import Welcome from "../src/components/Welcome";

export default function SSR({ data }) {
  return <Welcome {...data} />;
}

// Called on the server after each request
export async function getServerSideProps() {
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
