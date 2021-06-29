import { useEffect, useState } from "react";
import Welcome from "../src/components/Welcome";

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

  return <Welcome {...data} />;
}
