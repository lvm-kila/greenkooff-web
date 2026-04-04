"use client";

import { FormEvent, useState } from "react";
import AuthCard from "../../../components/auth/AuthCard";
import { useAuth } from "../../../hooks/useAuth";

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const result = await forgotPassword(email);
    setMessage(result);
  };

  return (
    <AuthCard title="Recuperar acceso" subtitle="Te ayudamos a recuperar tu cuenta de suscripción.">
      <form className="space-y-3" onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Correo registrado" className="input-premium" required />
        <button type="submit" className="btn-primary w-full">Enviar instrucciones</button>
      </form>
      {message ? <p className="mt-4 text-sm text-slate-600">{message}</p> : null}
    </AuthCard>
  );
}
