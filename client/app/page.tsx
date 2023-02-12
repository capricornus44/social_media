"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const onLogin = () => {
    router.push("/home");
  };

  return (
    <main className="absolute h-full w-full grid place-items-center">
      <div className="w-1/4 p-4 rounded-md bg-white shadow-md">
        <h1 className="mb-5 text-2xl text-center">Login</h1>
        <div className="flex flex-col gap-3">
          <button className="auth-button" onClick={onLogin}>
            Google
          </button>
          <button className="auth-button" onClick={onLogin}>
            Facebook
          </button>
          <button className="auth-button" onClick={onLogin}>
            Github
          </button>
        </div>
      </div>
    </main>
  );
}
