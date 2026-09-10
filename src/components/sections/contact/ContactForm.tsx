"use client";

import { useId, useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { serviceInterests } from "@/data/contact";
import { sendInquiry, type InquiryPayload } from "@/lib/contact-form";

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  fullName?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: InquiryPayload): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your work email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please describe your requirements.";
  return errors;
}

const initialValues: InquiryPayload = {
  fullName: "",
  company: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<InquiryPayload>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const field = (name: keyof InquiryPayload) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => setValues((v) => ({ ...v, [name]: e.target.value })),
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const result = await sendInquiry(values);
      if (result.ok) {
        setStatus("success");
        setValues(initialValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-card" role="status" aria-live="polite">
        <div className="flex flex-col items-start gap-4">
          <CheckCircle2 className="text-cta" size={40} aria-hidden />
          <h3 className="h-lg text-primary">Inquiry received.</h3>
          <p className="text-content-variant">
            Thank you for reaching out to LEF Signature. One of our sector leads will respond within
            24 business hours.
          </p>
          <button
            type="button"
            className="btn-outline-dark"
            onClick={() => setStatus("idle")}
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <span className="idx">02</span>
      <h2 className="h-lg text-primary">Inquiry Form</h2>
      <p className="mb-6 mt-2 text-content-variant">
        Fill out the form below and one of our sector leads will respond within 24 business hours.
      </p>

      {status === "error" ? (
        <div
          className="mb-6 flex items-start gap-3 border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle size={18} aria-hidden className="mt-0.5 shrink-0" />
          <span>Something went wrong sending your inquiry. Please try again or email us directly.</span>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="field">
            <label className="label" htmlFor={`${uid}-fullName`}>
              Full Name
            </label>
            <input
              {...field("fullName")}
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? `${uid}-fullName-err` : undefined}
            />
            {errors.fullName ? (
              <p id={`${uid}-fullName-err`} className="mt-1 text-xs text-red-600">
                {errors.fullName}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label className="label" htmlFor={`${uid}-company`}>
              Company Name
            </label>
            <input
              {...field("company")}
              type="text"
              placeholder="Company Name"
              autoComplete="organization"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="field">
            <label className="label" htmlFor={`${uid}-email`}>
              Work Email
            </label>
            <input
              {...field("email")}
              type="email"
              placeholder="email address"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            />
            {errors.email ? (
              <p id={`${uid}-email-err`} className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label className="label" htmlFor={`${uid}-service`}>
              Service Interest
            </label>
            <select {...field("service")}>
              <option value="">Select a Service</option>
              {serviceInterests.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor={`${uid}-message`}>
            Message / Project Brief
          </label>
          <textarea
            {...field("message")}
            rows={6}
            placeholder="Briefly describe your requirements for further engagement..."
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${uid}-message-err` : undefined}
          />
          {errors.message ? (
            <p id={`${uid}-message-err`} className="mt-1 text-xs text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="pt-2">
          <button type="submit" className="submit-btn" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
            <ArrowRight size={18} aria-hidden />
          </button>
        </div>
      </form>
    </div>
  );
}
