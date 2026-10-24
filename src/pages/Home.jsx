import "../styles/Home.css";
import panel1 from "../assets/panel1.png";
import panel2 from "../assets/panel2.png";
import panel3 from "../assets/panel3.png";
import { useState } from "react";
import abhijeetBehura from "../assets/Abhijeet Behura.jpg";
import arpitMishra from "../assets/image.png";

const founders = [
  { name: "Arpit Mishra", batch: "ITER 2022-26", image: arpitMishra },
  { name: "Abhijeet Behura", batch: "ITER 2022-26", image: abhijeetBehura },
];
function Home() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = () => {
    const body = `Name: ${name}\n\nMessage:\n${message}`;

    window.location.href = `mailto:englishcafeiter@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
  <main className="home">

    {/* PANEL 1 — WHO WE ARE */}
    <section className="panel">
      <div className="glass-panel">
        <img src={panel1} alt="" className="glass-bg-img" />

        <div className="glass-content left">
          <h1>
            SOA <span>EnglishCafé</span>
          </h1>

          <p>
            A student-driven community focused on communication,
            confidence, and leadership.
          </p>

          <div className="panel-actions">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              Join the Club
            </a>

            <a href="/events" className="btn outline">
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* PANEL 2 — OUR DOMAINS */}
    <section className="panel">
      <div className="glass-panel">
        <img src={panel2} alt="" className="glass-bg-img" />

        <div className="glass-content right">
          <h2>Our Domains</h2>

          <div className="domains">
            <div>
              <h3>Public Speaking & Oratory</h3>
              <p>Debates, speeches, and confidence platforms.</p>
            </div>

            <div>
              <h3>Literary & Creative Expression</h3>
              <p>Writing, poetry, and storytelling.</p>
            </div>

            <div>
              <h3>Leadership & Personality Development</h3>
              <p>Workshops and growth beyond academics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PANEL 3 — FOUNDERS */}
    <section className="panel">
      <div className="glass-panel">
        <img src={panel3} alt="" className="glass-bg-img" />

        <div className="glass-content center">
          <h2>The Founders</h2>

          <div className="founders-grid">
            {founders.map((founder, i) => (
              <div key={i} className="founder-card">
                <div className="founder-img">
                  <img src={founder.image} alt={founder.name} />
                </div>
                <h4>{founder.name}</h4>
                <span>{founder.batch}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

    {/* PANEL 4 — Contact Us */}
    <section className="panel-contact">
      <div className="glass-panel-contact">
        <div className="glass-content-contact">
          <h2>Contact Us</h2>

          <p>
            Have questions, feedback, or would like to contribute? We'd love to hear
            from you.
          </p>

          <div className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="btn primary" onClick={handleEmail}>
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>


  </main>
);
}


export default Home;