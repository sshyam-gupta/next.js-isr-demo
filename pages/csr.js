import { useEffect, useState } from "react";
import Welcome from "../src/components/Welcome";

export default function CSR() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `http://worldtimeapi.org/api/timezone/Asia/Kolkata`
      );
      const data = await res.json();
      setData({
        ...data,
        time: new Date(data.datetime).toLocaleTimeString(),
      });
    }
    getData();
  }, []);

  return <Welcome {...data} />;
}
