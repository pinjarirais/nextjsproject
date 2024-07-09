"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="pb-4">Ada Rais Pinjari</h1>
      <Link className="pb-2" href="/login">Go to Login page</Link>
      <Link href="/about">Go to About page</Link>
      <Link className="pb-2" href="/productlist">Go to Product list page</Link>
      <button className="pt-4" onClick={()=> router.push("/login")}>Go to login page</button>
      <button onClick={()=> router.push("/about")}>Go to About page</button>
    </main>
  );
}
