export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "Inter, system-ui, sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>Portfolio (placeholder)</h1>
      <p style={{ color: "#666", marginBottom: "1rem" }}>
        Your site build is now unblocked. Add your HeroSection (React/Tailwind) later.
      </p>
      <small style={{ color: "#999" }}>Deployed by Vercel — update this file when ready.</small>
    </div>
  );
}

