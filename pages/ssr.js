export default function SSR({ data }) {
  return (
    <>
      <h2>{`Name: ${data.user_name}`}</h2>
      <h4>{`Email: ${data.user_email}`}</h4>
    </>
  );
}

// Called on the server after each request
export async function getServerSideProps() {
  try {
    const res = await fetch(
      `https://app.fakejson.com/q/xfwFZwdV?token=aaVWtY8bHdT8r6ztYTZXiQ`
    );
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching  data", error);
  }
}
