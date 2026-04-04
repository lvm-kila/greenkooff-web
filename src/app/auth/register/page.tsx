"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import AuthCard from "../../../components/auth/AuthCard";
import { useAuth } from "../../../hooks/useAuth";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [next, setNext] = useState("/mi-cuenta");

  useEffect(() => {
    const nextParam = new URLSearchParams(window.location.search).get("next");
    if (nextParam) setNext(nextParam);
  }, []);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    try {
      await register({
        fullName: String(formData.get("fullName") ?? ""),
        company: String(formData.get("company") ?? ""),
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
      });
      router.push(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No fue posible crear la cuenta");
    }
  };

  return (
    <AuthCard
      title="Crear cuenta"
      subtitle="Regístrate para contratar y gestionar tu suscripción mensual."
      footer={
        <p>
          ¿Ya tienes cuenta? <Link href={`/auth/login?next=${encodeURIComponent(next)}`} className="text-blue-700 hover:underline">Iniciar sesión</Link>
        </p>
      }
    >
      <form className="space-y-3" onSubmit={onSubmit}>
        <input name="fullName" placeholder="Nombre completo" className="input-premium" required />
        <input name="company" placeholder="Empresa" className="input-premium" />
        <input name="email" type="email" placeholder="Correo corporativo" className="input-premium" required />
        <input name="password" type="password" placeholder="Contraseña" className="input-premium" required minLength={6} />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button type="submit" className="btn-primary w-full">Crear cuenta</button>
      </form>
    </AuthCard>
  );
}
