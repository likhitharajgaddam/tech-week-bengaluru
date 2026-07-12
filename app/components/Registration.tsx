"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, User, Mail, GraduationCap, BookOpen, Calendar, Phone, CheckCircle2 } from "lucide-react";

const yearOptions   = ["1st Year","2nd Year","3rd Year","4th Year","Postgraduate","Professional"];
const branchOptions = ["Computer Science","Information Technology","Electronics & Communication","Electrical Engineering","Mechanical Engineering","Data Science","AI/ML","Other"];

export default function Registration() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", college:"", branch:"", year:"", phone:"" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="register" className="section-py overflow-x-clip" ref={ref}>
      <div className="section-inner">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div
            className="eyebrow"
            style={{ background: "rgba(37,99,235,0.11)", border: "1px solid rgba(37,99,235,0.24)", color: "#93C5FD" }}
          >
            Register
          </div>
          <h2 className="text-section" style={{ marginBottom: 16 }}>Register Your Interest</h2>
          <p className="text-subtitle">Be the first to get updates about Bengaluru AI &amp; Developer Week 2026.</p>
        </motion.div>

        {/* ── Form container — 720 px centered ────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}
        >
          <div
            style={{
              background: "rgba(13,17,23,0.9)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 28,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle inner glows */}
            <div
              style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.07) 0%, transparent 55%), radial-gradient(circle at 15% 85%, rgba(124,58,237,0.07) 0%, transparent 55%)",
              }}
            />

            <div style={{ position: "relative", padding: "48px 48px" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center"
                  style={{ paddingTop: 24, paddingBottom: 24 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    style={{
                      width: 80, height: 80, borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(37,99,235,0.14)", border: "2px solid rgba(37,99,235,0.35)",
                      marginBottom: 24,
                    }}
                  >
                    <CheckCircle2 size={36} style={{ color: "#2563EB" }} />
                  </motion.div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 12 }}>You&apos;re on the list!</h3>
                  <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 380 }}>
                    Thanks for registering interest in Bengaluru AI &amp; Developer Week 2026. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-ghost"
                    style={{ marginTop: 32, height: 44, padding: "0 24px" }}
                  >
                    Register Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                  {/* Row 1: Name + Email */}
                  <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                    <Field label="Full Name"       name="name"   type="text"  Icon={User}          placeholder="Your full name"          value={form.name}   onChange={handleChange} required />
                    <Field label="Email Address"   name="email"  type="email" Icon={Mail}          placeholder="your@email.com"          value={form.email}  onChange={handleChange} required />
                  </div>

                  {/* Row 2: College */}
                  <Field label="College / Institution" name="college" type="text" Icon={GraduationCap} placeholder="Your college or organization" value={form.college} onChange={handleChange} required />

                  {/* Row 3: Branch + Year */}
                  <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                    <SelectField label="Branch / Department" name="branch" Icon={BookOpen} options={branchOptions} value={form.branch} onChange={handleChange} />
                    <SelectField label="Year of Study"       name="year"   Icon={Calendar}  options={yearOptions}   value={form.year}   onChange={handleChange} />
                  </div>

                  {/* Row 4: Phone */}
                  <Field label="Phone Number" name="phone" type="tel" Icon={Phone} placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary w-full"
                    style={{ height: 52, fontSize: 16, marginTop: 4 }}
                  >
                    <Send size={18} />
                    Register Interest
                  </motion.button>

                  <p style={{ textAlign: "center", fontSize: 13, color: "#6B7280" }}>
                    No spam. Just updates about Bengaluru AI &amp; Developer Week 2026.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #register .grid { grid-template-columns: 1fr !important; }
          #register [style*="padding: 48px"] { padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Shared field components ────────────────────────────── */
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;

function Field({
  label, name, type = "text", Icon, placeholder, value, onChange, required = false,
}: {
  label: string; name: string; type?: string; Icon: React.ElementType;
  placeholder: string; value: string; onChange: ChangeHandler; required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF" }}>{label}</label>
      <div style={{ position: "relative" }}>
        <Icon size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#4B5563", pointerEvents: "none" }} />
        <input
          name={name} type={type} placeholder={placeholder} value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          required={required}
          className="form-input"
        />
      </div>
    </div>
  );
}

function SelectField({
  label, name, Icon, options, value, onChange,
}: {
  label: string; name: string; Icon: React.ElementType;
  options: string[]; value: string; onChange: ChangeHandler;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF" }}>{label}</label>
      <div style={{ position: "relative" }}>
        <Icon size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#4B5563", pointerEvents: "none", zIndex: 1 }} />
        <select
          name={name} value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
          className="form-input"
          style={{ color: value ? "#fff" : "#4B5563", cursor: "pointer" }}
        >
          <option value="" disabled style={{ background: "#0D1117", color: "#9CA3AF" }}>Select {label}</option>
          {options.map(o => (
            <option key={o} value={o} style={{ background: "#0D1117", color: "#fff" }}>{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
