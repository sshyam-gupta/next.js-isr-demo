function Welcome(data) {
  return (
    <section style={{ padding: "7rem 1rem" }}>
      <h1>{`Hello Shyam`}</h1>
      <h2>{`Current time is ${data?.time}`}</h2>
    </section>
  );
}

export default Welcome;
