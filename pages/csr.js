import { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://app.fakejson.com/q/xfwFZwdV?token=aaVWtY8bHdT8r6ztYTZXiQ`
      );
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <h2>{`Name: ${data?.user_name}`}</h2>
      <h4>{`Email: ${data?.user_email}`}</h4>
    </>
  );
}
