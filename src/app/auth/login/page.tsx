"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import AuthCard from "../../../components/auth/AuthCard";
import { useAuth } from "../../../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
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
      await login({
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
      });
      router.push(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No fue posible iniciar sesión");
    }
  };

  return (
    <AuthCard
      title="Iniciar sesión"
      subtitle="Accede para continuar con la contratación de tu plan mensual."
      footer={
        <p>
          ¿No tienes cuenta? <Link href={`/auth/register?next=${encodeURIComponent(next)}`} className="text-blue-700 hover:underline">Crear cuenta</Link>
        </p>
      }
    >
      <form className="space-y-3" onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Correo corporativo" className="input-premium" required />
        <input name="password" type="password" placeholder="Contraseña" className="input-premium" required minLength={6} />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button type="submit" className="btn-primary w-full">Ingresar</button>
      </form>
      <p className="mt-3 text-xs text-slate-500">Demo mock: demo@gvc.cl / demo1234</p>
      <Link href="/auth/forgot-password" className="mt-3 inline-block text-sm text-blue-700 hover:underline">¿Olvidaste tu contraseña?</Link>
    </AuthCard>
  );
}
