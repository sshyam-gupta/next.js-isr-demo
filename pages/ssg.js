export default function SSG({ data }) {
  return (
    <>
      <h2>{`Name: ${data.user_name}`}</h2>
      <h4>{`Email: ${data.user_email}`}</h4>
    </>
  );
}

// Called at build time
export async function getStaticProps() {
  try {
    const res = await fetch(
      `https://app.fakejson.com/q/xfwFZwdV?token=aaVWtY8bHdT8r6ztYTZXiQ`
    );
    const data = await res.json();

    return {
      props: { data, validate: 30 },
    };
  } catch (error) {
    console.error("Error fetching  data", error);
  }
}
