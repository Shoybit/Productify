"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@productify.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      router.push("/products");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="border p-6 rounded w-80">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="border w-full mb-3 p-2"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border w-full mb-3 p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white w-full py-2"
      >
        Login
      </button>
    </div>
  );
}
