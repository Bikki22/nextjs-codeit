"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const productPage = () => {
  const [count, setCount] = useState(0);

  const router = useRouter();

  useEffect(() => {
    console.log(count);
    if (count > 5) {
      router.push("/");
    }
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}> click </button>

      <div>
        <Link href={"/products/1"}>Product : 1</Link>
        <Link href={"/products/2"}>Product : 2</Link>
        <Link href={"/products/3"}>Product : 3</Link>
        <Link href={"/products/4"}>Product : 4</Link>
        <Link href={"/products/5"}>Product : 5</Link>
      </div>
    </div>
  );
};

export default productPage;
