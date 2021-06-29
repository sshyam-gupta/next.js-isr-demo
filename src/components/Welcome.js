function Welcome(data) {
  return (
    <>
      <h1>{`Hello ${data?.name}`}</h1>
      <h2>{`Current time is ${data?.time}`}</h2>
    </>
  );
}

export default Welcome;
