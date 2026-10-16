"use client";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Notifications = () => {
  const route = useRouter();
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Manage Notifications</h2>
      <span onClick={() => route.back()} className="flex gap-2">
        <ArrowLeftIcon />
        Back
      </span>
    </div>
  );
};

export default Notifications;
