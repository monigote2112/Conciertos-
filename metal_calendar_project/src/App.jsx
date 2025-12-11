import React from 'react'

const events = [
  { date: "2026-01-12", band: "Corrosion Of Comformity", city: "Sala Metronomo" },
  { date: "2026-01-15", band: "Cynic", city: "Blondie" },
    { date: "2026-01-17", band: "DEATH + Destruction", city: "Teatro Caupolican" },
    { date: "2026-02-06", band: "FORBIDDEN + VIOLENCE + VENOM INC", city: "Teatro Coliseo" },
  { date: "2026-02-12", band: "Enforcer", city: "Club Ambar" },
  { date: "2026-02-14", band: "Obituary", city: "Teatro Cariola" },
    { date: "2026-02-14", band: "Obituary", city: "Teatro Cariola" },
  { date: "2026-03-07", band: "Epic rock fest", city: "Club Hipico" },
  { date: "2026-03-13", band: "DRI", city: "Teatro Caupolican" },
  { date: "2026-03-14", band: "Nile", city: "Teatro Cariola" },
  


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
