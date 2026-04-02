import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl">NextJs App</h1>
      <div className="flex gap-4 p-2">
        {/* sidebar */}
        <div>
          <h2>Links</h2>
          <section>
            <Link href="/users">Users</Link>
          </section>
        </div>
        {/* main content */}
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
