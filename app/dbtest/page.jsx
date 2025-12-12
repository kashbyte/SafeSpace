"use client";
import { useEffect, useState } from "react";

export default function DBTest() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/mydb");
      const data = await res.json();
      setResult(data);
    }
    load();
  }, []);

  return (
    <pre>{JSON.stringify(result, null, 2)}</pre>
  );
}
