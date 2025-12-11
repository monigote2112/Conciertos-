import React from 'react'

const events = [
  { date: "2025-01-20", band: "Amon Amarth", city: "Santiago" },
  { date: "2025-02-14", band: "Gojira", city: "Concepción" },
];

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20, fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Conciertos Metal en Chile</h1>
      {events.map((ev, i) => (
        <div key={i} style={{ padding: 15, border: "1px solid #ccc", marginTop: 10, borderRadius: 8 }}>
          <h2>{ev.band}</h2>
          <p>📅 {ev.date}</p>
          <p>📍 {ev.city}</p>
        </div>
      ))}
    </div>
  );
}