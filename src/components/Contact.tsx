"use client";

import { FormEvent, ReactNode, useMemo, useState } from "react";
import { BRAND, WHATSAPP_URL } from "../content/siteContent";
import Reveal from "./Reveal";

type FormValues = {
  nombre: string;
  cargo: string;
  email: string;
  empresa: string;
  objetivo: string;
  inversion: string;
  plazo: string;
  mensaje: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  nombre: "",
  cargo: "",
  email: "",
  empresa: "",
  objetivo: "",
  inversion: "",
  plazo: "",
  mensaje: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): Errors {
  const errors: Errors = {};

  if (values.nombre.trim().length < 3) errors.nombre = "Indica tu nombre completo.";
  if (values.cargo.trim().length < 2) errors.cargo = "Indica tu cargo para contextualizar la reunión.";
  if (!emailRegex.test(values.email.trim())) errors.email = "Usa un correo corporativo válido.";
  if (values.empresa.trim().length < 2) errors.empresa = "Indica el nombre de tu empresa.";
  if (!values.objetivo) errors.objetivo = "Selecciona el objetivo principal.";
  if (!values.inversion) errors.inversion = "Selecciona un rango de inversión estimado.";
  if (!values.plazo) errors.plazo = "Selecciona el plazo estimado.";
  if (values.mensaje.trim().length < 20) errors.mensaje = "Cuéntanos más contexto (mínimo 20 caracteres).";

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const statusCopy = useMemo(() => {
    if (status === "success") return "Solicitud lista: abrimos WhatsApp con tu brief ejecutivo prellenado.";
    if (status === "error") return "Revisa los campos marcados para continuar.";
    if (status === "loading") return "Preparando resumen estratégico...";
    return "Completa este brief y te responderemos con foco comercial.";
  }, [status]);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setStatus("idle");
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setStatus("loading");

    const richMessage = [
      "Hola GVC, quiero iniciar una conversación estratégica.",
      "",
      `• Nombre: ${values.nombre}`,
      `• Cargo: ${values.cargo}`,
      `• Empresa: ${values.empresa}`,
      `• Correo: ${values.email}`,
      `• Objetivo: ${values.objetivo}`,
      `• Inversión estimada: ${values.inversion}`,
      `• Plazo estimado: ${values.plazo}`,
      `• Contexto: ${values.mensaje}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(richMessage)}`;

    await new Promise((resolve) => setTimeout(resolve, 700));
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="contact-premium-banner rounded-3xl p-8 text-white md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Siguiente paso</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
              Diseñemos una operación comercial que escale con trazabilidad real.
            </h2>
            <p className="mt-4 max-w-2xl text-blue-100">
              Completa tu solicitud ejecutiva. Recibirás una ruta inicial de implementación para priorizar inversión,
              tiempos y arquitectura comercial.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#planes" className="btn-primary">
                Explorar planes
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <form className="card-premium" aria-label="Formulario de contacto comercial" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Solicitud ejecutiva de diagnóstico</h3>
                <p className="mt-2 text-sm text-slate-600">{statusCopy}</p>
              </div>
              <span className="badge-trust">Respuesta prioritaria 24h hábiles</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Nombre completo" error={errors.nombre}>
                <input className="input-premium" name="nombre" value={values.nombre} onChange={(e) => handleChange("nombre", e.target.value)} />
              </Field>
              <Field label="Cargo" error={errors.cargo}>
                <input className="input-premium" name="cargo" value={values.cargo} onChange={(e) => handleChange("cargo", e.target.value)} />
              </Field>
              <Field label="Correo corporativo" error={errors.email}>
                <input className="input-premium" type="email" name="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} />
              </Field>
              <Field label="Empresa" error={errors.empresa}>
                <input className="input-premium" name="empresa" value={values.empresa} onChange={(e) => handleChange("empresa", e.target.value)} />
              </Field>
              <Field label="Objetivo principal" error={errors.objetivo}>
                <select className="input-premium" name="objetivo" value={values.objetivo} onChange={(e) => handleChange("objetivo", e.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="Escalar captación de leads calificados">Escalar captación de leads</option>
                  <option value="Mejorar cierre comercial">Mejorar cierre comercial</option>
                  <option value="Automatizar seguimiento y operación">Automatizar operación comercial</option>
                  <option value="Lanzar nueva oferta o unidad">Lanzar nueva oferta</option>
                </select>
              </Field>
              <Field label="Rango de inversión" error={errors.inversion}>
                <select className="input-premium" name="inversion" value={values.inversion} onChange={(e) => handleChange("inversion", e.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="USD 300 a 800 mensuales">USD 300 a 800 / mes</option>
                  <option value="USD 800 a 1.500 mensuales">USD 800 a 1.500 / mes</option>
                  <option value="USD 1.500 a 3.000 mensuales">USD 1.500 a 3.000 / mes</option>
                  <option value="Sobre USD 3.000 mensuales">Sobre USD 3.000 / mes</option>
                </select>
              </Field>
            </div>

            <div className="mt-4 grid gap-4">
              <Field label="Plazo estimado para iniciar" error={errors.plazo}>
                <select className="input-premium" name="plazo" value={values.plazo} onChange={(e) => handleChange("plazo", e.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="Inmediato (1-2 semanas)">Inmediato (1-2 semanas)</option>
                  <option value="Corto plazo (30 días)">Corto plazo (30 días)</option>
                  <option value="60 a 90 días">60 a 90 días</option>
                </select>
              </Field>
              <Field label="Contexto comercial" error={errors.mensaje}>
                <textarea
                  className="input-premium min-h-28"
                  name="mensaje"
                  value={values.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  placeholder="Ejemplo: equipo comercial actual, ticket promedio, canales activos y principal cuello de botella."
                />
              </Field>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full justify-center" disabled={status === "loading"}>
              {status === "loading" ? "Preparando WhatsApp ejecutivo..." : "Enviar solicitud por WhatsApp"}
            </button>
          </form>

          <div className="card-premium h-fit">
            <h3 className="text-xl font-semibold text-slate-900">Canales de contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>📲 WhatsApp comercial con respuesta prioritaria en horario laboral.</li>
              <li>✉️ Correo ejecutivo: {BRAND.email}.</li>
              <li>🗓️ Reuniones online para Chile y Latinoamérica.</li>
              <li>🔒 Información tratada de forma confidencial para evaluar tu caso.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="space-y-1.5 text-sm font-medium text-slate-700">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}
