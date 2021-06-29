import { useEffect, useState } from "react";
import { server } from "../src/config";
import Welcome from "../src/components/Welcome";

export default function CSR() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${server}/api/hello`);
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);

  return <Welcome {...data} />;
}
