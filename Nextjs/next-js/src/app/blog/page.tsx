import Link from "next/link";
import React from "react";

const blogs = [
  {
    name: "Getting started with Next.js",
    path: "/blog/first",
    description:
      "Set up your first Next.js project, understand the app router, and ship a simple page in under ten minutes.",
  },
  {
    name: "Styling with Tailwind CSS",
    path: "/blog/second",
    description:
      "Build clean, responsive layouts using utility classes instead of writing and maintaining separate CSS files.",
  },
  {
    name: "Server and client components",
    path: "/blog/third",
    description:
      "Learn when to keep a component on the server and when it needs to run in the browser, with simple examples.",
  },
  {
    name: "Deploying your app",
    path: "/blog/fourth",
    description:
      "Take your project live with environment variables, a custom domain, and a deployment that updates on every push.",
  },
];

const page = () => {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <h2 className="text-4xl font-semibold tracking-tight text-white">Blog</h2>
      <p className="mt-3 max-w-xl text-lg text-neutral-400">
        Short notes on building with Next.js.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog, i) => (
          <Link
            href={blog.path}
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/3 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <h4 className="text-xl font-semibold text-white">{blog.name}</h4>
            <hr className="my-4 border-white/10 transition-colors duration-300 group-hover:border-white/30" />
            <p className="text-base leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default page;
