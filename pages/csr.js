import { useEffect, useState } from "react";
import Welcome from "../src/components/Welcome";

export default function CSR() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://next-js-isr-demo.vercel.app/api/hello`);
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);

  return <Welcome {...data} />;
}
