import React from "react";

export default function About() {
  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      
      {/* ------------ INTRO SECTION ------------ */}
      <section style={{ marginBottom: "40px" }}>
        <h1>About Us</h1>
        <p style={{ maxWidth: "750px", color: "var(--text)", lineHeight: "1.7" }}>
          Welcome to our Product Showcase Platform — a modern, fast and user-friendly
          application built using Vite + React. Our goal is to deliver clean UI,
          smooth navigation and a delightful user experience.
        </p>
      </section>

      {/* ------------ WHO WE ARE ------------ */}
      <section className="section">
        <h2>Who We Are</h2>
        <p style={{ maxWidth: "750px", color: "var(--text)", lineHeight: "1.7" }}>
          We are a passionate team of developers and designers who focus on creating
          high-performance, interactive front-end applications. Our product showcase
          system helps users explore products easily and visually.
        </p>
      </section>

      {/* ------------ OUR MISSION ------------ */}
      <section className="section">
        <h2>Our Mission</h2>
        <p style={{ maxWidth: "700px", color: "var(--text)", lineHeight: "1.7" }}>
          Our mission is to develop intuitive and beautiful web interfaces that improve
          user experience and empower businesses to showcase their products online
          in the most effective way.
        </p>
      </section>

      {/* ------------ OUR VISION ------------ */}
      <section className="section">
        <h2>Our Vision</h2>
        <p style={{ maxWidth: "700px", color: "var(--text)", lineHeight: "1.7" }}>
          To become a leading front-end development team known for quality, creativity,
          and problem-solving using modern technologies like React & Vite.
        </p>
      </section>

      {/* ------------ OUR VALUES ------------ */}
      <section className="section">
        <h2>Our Values</h2>
        <ul style={{ color: "var(--text)", lineHeight: "1.8" }}>
          <li>✔ User-centric design</li>
          <li>✔ Performance & speed</li>
          <li>✔ Scalable & clean code</li>
          <li>✔ Creativity & innovation</li>
          <li>✔ Continuous learning</li>
        </ul>
      </section>

      {/* ------------ JOURNEY / TIMELINE ------------ */}
      <section className="section">
        <h2>Our Journey</h2>
        <div style={{ maxWidth: "750px", paddingLeft: "12px", color: "var(--text)" }}>
          <p><strong>2023:</strong> Started as a small frontend learning group.</p>
          <p><strong>2024:</strong> Developed our first UI component system.</p>
          <p><strong>2025:</strong> Built this modern Product Showcase platform.</p>
        </div>
      </section>

      {/* ------------ MEET OUR TEAM (ANIMATED CARDS) ------------ */}
      <section className="section">
        <h2>Meet Our Team</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {[
            { name: "Himesh", role: "Frontend Developer" },
            { name: "Raj", role: "UI/UX Designer" },
            { name: "Aarav", role: "React Developer" },
            { name: "Simran", role: "QA Tester" },
          ].map((member, index) => (
            <div
              key={member.name}
              className="team-card"
              style={{
                background: "var(--card-bg)",
                padding: "16px",
                borderRadius: "12px",
                boxShadow: "var(--shadow)",
                textAlign: "center",
                animationDelay: `${index * 0.15}s`, // stagger animation
              }}
            >
              <h3 style={{ margin: "0 0 6px", color: "var(--text)" }}>
                {member.name}
              </h3>

              <p style={{ margin: 0, color: "var(--muted)" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
