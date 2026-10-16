"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
};

const inputStyles =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900/10 dark:bg-neutral-900 dark:text-white dark:focus:ring-white/10";

const borderStyles = (hasError: boolean) =>
  hasError
    ? "border-red-500 focus:border-red-500"
    : "border-neutral-200 focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-white";

const labelStyles =
  "mb-1.5 block text-sm font-medium text-neutral-900 dark:text-neutral-200";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    defaultValues: { fullName: "", email: "", password: "" },
  });

  const handleRegister = async (data: RegisterFormValues) => {
    // Replace with your API call
    console.log("Register: ", data);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-neutral-950">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Enter your details to get started.
        </p>

        <form
          onSubmit={handleSubmit(handleRegister)}
          noValidate
          className="mt-8 space-y-5"
        >
          {/* Full name */}
          <div>
            <label htmlFor="fullName" className={labelStyles}>
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              aria-invalid={!!errors.fullName}
              className={`${inputStyles} ${borderStyles(!!errors.fullName)}`}
              {...register("fullName", {
                required: "Enter your full name.",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters.",
                },
              })}
            />
            {errors.fullName && (
              <p role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              className={`${inputStyles} ${borderStyles(!!errors.email)}`}
              {...register("email", {
                required: "Enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
            />
            {errors.email && (
              <p role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className={labelStyles}>
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              aria-invalid={!!errors.password}
              className={`${inputStyles} ${borderStyles(!!errors.password)}`}
              {...register("password", {
                required: "Enter a password.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
              })}
            />
            {errors.password && (
              <p role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950"
          >
            {isSubmitting ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-8 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
          >
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
