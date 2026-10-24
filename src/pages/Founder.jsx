import "../styles/Home.css";
import "../styles/Founder.css";
import panel3 from "../assets/panel3.png";
import abhijeetBehura from "../assets/Abhijeet Behura.jpg";
import arpitMishra from "../assets/image.png";

const founders = [
  { name: "Arpit Mishra", batch: "ITER 2022-26", image: arpitMishra },
  { name: "Abhijeet Behura", batch: "ITER 2022-26", image: abhijeetBehura },
];

function Founder() {
  return (
    <section className="panel">
      <div className="glass-panel">
        <img src={panel3} alt="" className="glass-bg-img" />

        <div className="glass-content center">
          <h2>Our Founders</h2>

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
  );
}

export default Founder;