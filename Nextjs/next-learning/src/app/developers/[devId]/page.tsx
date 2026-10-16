import { Suspense } from "react";

interface PageProps {
  params: Promise<{ devId: string }>;
}

async function DeveloperDetails({ params }: PageProps) {
  const { devId } = await params;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {" "}
      <h1 className="text-3xl font-semibold tracking-tight">
        Developer ID: {devId}{" "}
      </h1>{" "}
    </main>
  );
}

export default function SingleDeveloper({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-6xl px-6 py-16">
          {" "}
          <p className="text-neutral-500">Loading developer...</p>{" "}
        </main>
      }
    >
      {" "}
      <DeveloperDetails params={params} />{" "}
    </Suspense>
  );
}
