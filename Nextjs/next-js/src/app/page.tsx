import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-3 ">
        <h1 className="text-4xl font-bold m-3 justify-center">
          Next.js Development
        </h1>
      </div>
      
      <div className="flex gap-3 m-3 border-t-2 border-amber-500 p-4">
        <div className=" flex items-center justify-center p-3 rounded-2xl bg-teal-700">
          <h2 className="text-2xl mx-5 my-2 font-bold"><Link href='/blog'>Blog</Link></h2>
        </div>

        <div className=" flex items-center justify-center p-3 rounded-2xl bg-teal-700">
          <h2 className="text-2xl mx-5 my-2 font-bold"><Link href='/products'>Products</Link></h2>
        </div>
      </div>
    </div>
  );
};

export default page;
