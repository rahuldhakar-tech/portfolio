// pages/index.js
import React from "react";

export default function Home() {
  const metrics = [
    { metric: "13.7%", description: "monthly revenue from new export channel" },
    { metric: "18%", description: "MoM revenue growth (pilot channel)" },
    { metric: "97%", description: "capacity utilization (operations optimization)" },
    { metric: "8.33 CGPA", description: "B.Tech, MANIT Bhopal" }
  ];

  return (
    <div style={{ fontFamily: "Inter, Roboto, system-ui, sans-serif", margin: 0 }}>
      <header style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#0f172a 0%, #071633 60%)",
        color: "white",
        padding: "48px 20px",
        boxSizing: "border-box"
      }}>
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            marginBottom: 28,
            fontSize: 14,
            color: "#7dd3fc"
          }}>
            <div style={{ width: 8, height: 8, borderRadius: 8, background: "#38bdf8", boxShadow: "0 0 8px rgba(56,189,248,0.3)" }} />
            Available for new projects
          </div>

          <h1 style={{
            fontSize: 48,
            lineHeight: 1.02,
            margin: 0,
            marginBottom: 12,
            fontWeight: 800,
            letterSpacing: "-0.02em"
          }}>
            Hi, I'm <span style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)", WebkitBackgroundClip: "text", color: "transparent" }}>Rahul Singh Dhakar</span>
          </h1>

          <p style={{ fontSize: 20, marginTop: 6, marginBottom: 18, color: "rgba(255,255,255,0.87)", fontWeight: 600 }}>
            Data Analytics & Operations Specialist
          </p>

          <p style={{ maxWidth: 820, margin: "0 auto 28px", color: "rgba(255,255,255,0.8)", fontSize: 16 }}>
            I build <strong style={{ color: "#7dd3fc" }}>actionable dashboards</strong> and <strong style={{ color: "#7dd3fc" }}>operational pipelines</strong> that improve revenue, utilization and decision-making for operations and service businesses.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <a href="#projects" style={{
              display: "inline-block",
              padding: "12px 22px",
              borderRadius: 12,
              background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
              color: "#021124",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(124,58,237,0.18)"
            }}>View Case Studies</a>

            <a href="mailto:rahuldhakad0802@gmail.com" style={{
              display: "inline-block",
              padding: "12px 20px",
              borderRadius: 12,
              border: "2px solid rgba(255,255,255,0.08)",
              color: "white",
              fontWeight: 600,
              textDecoration: "none",
              background: "transparent"
            }}>Let's Talk</a>

            <a href="/resume.pdf" download style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 12,
              color: "rgba(255,255,255,0.9)",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)"
            }}>Download Resume</a>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 18,
            marginTop: 28
          }}>
            {metrics.map((m, i) => (
              <div key={i} style={{
                borderRadius: 14,
                padding: 18,
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.04)",
                textAlign: "left",
                boxShadow: "0 8px 30px rgba(2,6,23,0.45)"
              }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#7dd3fc", marginBottom: 6 }}>{m.metric}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{m.description}</div>
              </div>
            ))}
          </div>

          <div id="projects" style={{ marginTop: 46, color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
            <h3 style={{ margin: "0 0 8px 0" }}>Featured projects (examples)</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
              <li>• Coffee Sales Insights Dashboard — Power BI & SQL; surfaced SKU & peak windows.</li>
              <li>• Hospital Management Analytics — Billing & appointment KPIs; staffing insights.</li>
              <li>• Ice Block Manufacturing Pilot — export channel; +13.7% monthly revenue, 18% MoM growth.</li>
            </ul>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.7)" }}>Want these as full case studies? I can add expandable pages or GitHub links next.</p>
          </div>
        </div>
      </header>

      <footer style={{ padding: "28px 20px", textAlign: "center", background: "#020617", color: "rgba(255,255,255,0.6)" }}>
        © {new Date().getFullYear()} Rahul Singh Dhakar • <a href="mailto:rahuldhakad0802@gmail.com" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "underline" }}>rahuldhakad0802@gmail.com</a>
      </footer>
    </div>
  );
}
