import { Developer } from "@/types/type";
import Link from "next/link";
import React from "react";

const DevCard = ({ developer }: { developer: Developer }) => {
  return (
    <Link
      href={`/developers/${developer.devId}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 dark:hover:shadow-black/20 dark:focus-visible:ring-offset-neutral-950"
    >
      {/* Photo */}
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <img
          src={developer.image}
          alt={developer.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Experience badge */}
        <div className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
          {developer.experience} yrs exp.
        </div>

        {/* Bottom image label */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-medium text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Developer</span>
        </div>
      </div>

      {/* Details */}
      <div className="px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
              {developer.name}
            </h3>

            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {developer.role}
            </p>
          </div>

          {/* Arrow */}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-300 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white dark:border-neutral-700 dark:text-neutral-400 dark:group-hover:border-emerald-500 dark:group-hover:bg-emerald-500 dark:group-hover:text-neutral-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-neutral-100 dark:bg-neutral-800" />

        {/* Email */}
        <p className="truncate text-sm text-neutral-500 transition-colors duration-200 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-300">
          {developer.email}
        </p>
      </div>
    </Link>
  );
};

export default DevCard;
