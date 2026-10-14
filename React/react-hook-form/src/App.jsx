import React, { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const [currentState, setCurrentState] = useState("Login");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    shouldUnregister: true,
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const handleForm = async (data) => {
    try {
      if (currentState === "Login") {
        console.log("Login:", data);

        // Demo:
        // await loginApi(data)
        reset()
      } else {
        console.log("Register:", data);

        // Demo:
        // await registerApi(data)
        reset()
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  const toggleState = () => {
    setCurrentState((prevState) =>
      prevState === "Login" ? "Register" : "Login",
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1B211F] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[#38433E] bg-[#242C29] p-8 shadow-2xl shadow-black/30 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[#E4E8E2]">
          {currentState === "Login" ? "Welcome back" : "Create your account"}
        </h2>
        <p className="mt-2 text-sm text-[#8E9A93]">
          {currentState === "Login"
            ? "Log in to continue."
            : "It only takes a minute."}
        </p>

        <form
          onSubmit={handleSubmit(handleForm)}
          noValidate
          className="mt-8 space-y-5"
        >
          {currentState === "Register" && (
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-[#C9D0CB]"
              >
                Full name
              </label>

              <input
                id="fullName"
                type="text"
                placeholder="Your name"
                aria-invalid={!!errors.fullName}
                className={`w-full rounded-lg border bg-[#1B211F] px-4 py-3 text-sm text-[#E4E8E2] placeholder:text-[#5F6B65] outline-none transition focus:border-[#A3B8A8] focus:ring-4 focus:ring-[#A3B8A8]/15 ${
                  errors.fullName ? "border-[#D4A29C]" : "border-[#38433E]"
                }`}
                {...register("fullName", {
                  required: "Must enter full name",
                  validate: (value) =>
                    value.trim().length > 0 ||
                    "Full name cannot contain only spaces",
                })}
              />

              {errors.fullName && (
                <p className="mt-2 text-xs text-[#D4A29C]">
                  {errors.fullName.message}
                </p>
              )}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#C9D0CB]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              className={`w-full rounded-lg border bg-[#1B211F] px-4 py-3 text-sm text-[#E4E8E2] placeholder:text-[#5F6B65] outline-none transition focus:border-[#A3B8A8] focus:ring-4 focus:ring-[#A3B8A8]/15 ${
                errors.email ? "border-[#D4A29C]" : "border-[#38433E]"
              }`}
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="mt-2 text-xs text-[#D4A29C]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#C9D0CB]"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="At least 6 characters"
              aria-invalid={!!errors.password}
              className={`w-full rounded-lg border bg-[#1B211F] px-4 py-3 text-sm text-[#E4E8E2] placeholder:text-[#5F6B65] outline-none transition focus:border-[#A3B8A8] focus:ring-4 focus:ring-[#A3B8A8]/15 ${
                errors.password ? "border-[#D4A29C]" : "border-[#38433E]"
              }`}
              {...register("password", {
                required: "Please enter a password",
                minLength: {
                  value: 6,
                  message: "Password must contain at least 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="mt-2 text-xs text-[#D4A29C]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#A3B8A8] px-4 py-3 text-sm font-semibold text-[#1B211F] transition hover:bg-[#B4C7B9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#A3B8A8]/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting
                ? "Please wait..."
                : currentState === "Login"
                  ? "Login"
                  : "Register"}
            </button>
          </div>

          <hr className="border-[#38433E]" />

          <p className="text-center text-sm text-[#8E9A93]">
            {currentState === "Login"
              ? "Create a new account? "
              : "Already have an account? "}

            <button
              type="button"
              onClick={toggleState}
              className="font-medium text-[#A3B8A8] underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:underline"
            >
              {currentState === "Login" ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
