
import "../styles/Crew.css";

import anshGuptaImg from "../assets/Ansh Gupta.jpg";
import samikshyaImg from "../assets/Samikshya Jena.jpg";
import saiLaxmiImg from "../assets/P Sai Laxmi.jpg";
import gracySinghImg from "../assets/Gracy Singh.jpg";
import navneetSahuImg from "../assets/Navneet Sahu.jpeg";
import tanzeelaImg from "../assets/Tanzeela Taskeen.jpg";
import aisheeImg from "../assets/Aishee.jpeg";
import taniImg from "../assets/Tani.jpg";
import ishikaImg from "../assets/Ishika Bhowmik.jpg";
import reetFoglaImg from "../assets/Reet Fogla.jpg";
import adarshImg from "../assets/Adarsh Pattnayak.jpg";
import shubhamImg from "../assets/Shubham Kumar.jpg";
import abhijeetImg from "../assets/Abhijeet Dash.jpg";
import sunilImg from "../assets/Sunil ku pradhan.jpg";
import saiSidhi from "../assets/Ansh Gupta.jpeg"; 
import ananyaImg from "../assets/Ananya Roy K.jpg";
import pranjalImg from "../assets/Pranjal Choudhury.jpg";
import shobhiniImg from "../assets/Shobhini Upadhyay.jpg";
import sovamImg from "../assets/Sovam Das Mohapatra.JPG";
import aratrikaImg from "../assets/Aratrika Chaudhury.jpg";
import anshikaImg from "../assets/Anshika Anand.JPG";
import ayushImg from "../assets/ayush anshuman.jpeg";
import puspanjaliImg from "../assets/Puspanjali N.jpg";
import praptiImg from "../assets/Prapti Prayashi.jpg";
import pousaliImg from "../assets/Pousali Dolai.jpg";

// no photo exist
import akankshyaImg from "../assets/Akankshya Jena.jpg";
import omshreeImg from "../assets/profile-placeholder.png";
import bhumikaImg from "../assets/Bhumika Dash.jpg";
import sanjanaImg from "../assets/profile-placeholder.png";
import aryanImg from "../assets/profile-placeholder.png";
import dibyashreeImg from "../assets/DIBYASHREE SAHOO.jpeg";
import roshniImg from "../assets/Roshni Kumari.jpg";
import sriyaImg from "../assets/ Sriya Sahoo.jpg";
import ayushshImg from "../assets/Ayush Sharma .jpg";


const secretariat = [
  { name: "Ansh Gupta", role: "Coordinator", img: anshGuptaImg, quote: `Would I rather be feared or loved? Easy — both. I want people to be afraid of how much they love me.` },
  { name: "Omshree Dash", role: "Coordinator", img: omshreeImg, quote: `quote not available due to non-submission` },
  { name: "Bhumika Dash", role: "Event Advisor", img: bhumikaImg, quote: `Curiosity is the wick in the candle of learning.` },
  { name: "Ananya Roy Karmakar", role: "Tech Lead", img: ananyaImg, quote: `Whatever you do, at the crossroads, keep going forward.` },
  { name: "Abhijeet Dash", role: "Public Relations Executive", img: abhijeetImg, quote: `Live on your own terms 🌸` },
  { name: "Samikshya Jena", role: "Public Relations Executive", img: samikshyaImg, quote: `If your goals don't disrupt your current life cycle, they are too small.` },
  { name: "Akankshya Jena", role: "Content Executive", img: akankshyaImg, quote: `Whatever happens, let it go, bro. We rock and roll 🤘 Viva la Vida 🍉✨️` },
  { name: "Pousali Dolai", role: "Creative Associate • Tech Team (Frontend)", img: pousaliImg, quote: `The world won't be kinder until you are towards yourself.` },
  { name: "Tanisha Chatterjee", role: "Content Lead", img: taniImg, quote: `Before I learned to design with colors, my mother designed my world with love.` },
  { name: "Saisidhi Samal", role: "Content Lead • Tech Team (Backend)", img: saiSidhi, quote: `May the calm in you win over the chaos around you.` },
  { name: "Prapti Prayashi Sahoo", role: "Public Relations Lead", img: praptiImg, quote: `Become so deeply rooted in your own growth that nothing meant to shake you can succeed.` },
  { name: "Shobhini Upadhyay", role: "Public Relations Lead", img: shobhiniImg, quote: `I once heard: you is kind, you is smart, you is important. And it's never the destination, it's just the journey and the people that matter. If you think you reached your destination — nope, the final destination is death. So never stop. And I love you all.` },
  { name: "Sanjana Behera", role: "Campus Representative (Campus-4)", img: sanjanaImg, quote: `quote not available due to non-submission` },
  { name: "Aryan Mishra", role: "Campus Representative (Campus-6)", img: aryanImg, quote: `quote not available due to non-submission` },
  { name: "Addarsh Pattnayak", role: "Campus Representative (Campus-2)", img: adarshImg, quote: `Jack of all trades, master of none, though oftentimes better than master of one.` },
];

const techTeam = [
  { name: "Pranjal Choudhury", role: "Frontend Developer", img: pranjalImg, quote: `As you sow, so shall you reap.` },
  { name: "Shubham Kumar", role: "Frontend Developer", img: shubhamImg, quote: `The things we do, do things to us.` },
  {name:"Ayush Sharma",role: "Ex-Contributor", img: ayushshImg , quote:`Special thanks from the SEC Tech Team to our former member`},
];

const contentTeam = [
  { name: "Dibyashree Sahoo", role: "Content Team Member", img: dibyashreeImg, quote: `Soft chaos` },
  { name: "Sriya Sahoo", role: "Content Team Member", img: sriyaImg, quote: `Remember, you're the one who can fill the world with sunshine` },
  { name: "Aishee Mukhopadhyay", role: "Content Team Member", img: aisheeImg, quote: `Look like an innocent flower, but be the serpent under it. — William Shakespeare` },
  { name: "Anshika Anand", role: "Content Team Member", img: anshikaImg, quote: `Strive not to be a success but rather to be of value.` },
  { name: "Aratrika Chaudhury", role: "Content Team Member", img: aratrikaImg, quote: `Stars shine the brightest on the darkest nights.` },
  { name: "Ayush Anshuman", role: "Content Team Member", img: ayushImg, quote: `We were born to inherit the stars.` },
  { name: "Gracy Singh", role: "Content Team Member", img: gracySinghImg, quote: `Every sunrise is life's gentle reminder that no setback is final, and every day offers another chance to become better than yesterday.` },
  { name: "Ishika Bhowmik", role: "Content Team Member", img: ishikaImg, quote: `You are what you love. — Taylor Swift (Daylight)` },
  { name: "Navneet Sahu", role: "Content Team Member", img: navneetSahuImg, quote: `यत् भावो – तत् भवति। (You become what you believe.)` },
  { name: "P. Sai Laxmi", role: "Content Team Member", img: saiLaxmiImg, quote: `Be yourself, everyone else is already taken.` },
  { name: "Puspanjali Nayak", role: "Content Team Member", img: puspanjaliImg, quote: `If there is a will, there is a way.` },
  { name: "Reet Fogla", role: "Content Team Member", img: reetFoglaImg, quote: `Stay humble enough to learn, patient enough to grow, and determined enough to succeed. Either it's now or never.` },
  { name: "Sovam Das Mohapatra", role: "Content Team Member", img: sovamImg, quote: `If you're not at the table, you're on the menu.` },
  { name: "Sunil Kumar Pradhan", role: "Content Team Member", img: sunilImg, quote: `If you see something is wrong and you choose to keep quiet, you are a criminal. — Che Guevara` },
  { name: "Tanzeela Taskeen", role: "Content Team Member", img: tanzeelaImg, quote: `A winner is a dreamer who never gives up.` },
  { name: "Roshni", role: "Content Team Member", img: roshniImg, quote: `Consistently is the key!! ` },
];

function TeamPanel({ title, members }) {
  return (
    <section className="crew-panel">
      <h2 className="panel-title">{title}</h2>
      <div className="crew-grid">
        {members.map((m, i) => (
          <div className="crew-card" key={i}>
            <div className="crew-img">
              <img src={m.img} alt={m.name} />
            </div>
            <h3>{m.name}</h3>
            {m.role && <p className="crew-role">{m.role}</p>}
            <div className="divider"></div>
            {m.quote && <p className="crew-quote">“{m.quote}”</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Crew() {
  return (
    <section className="page">
      <div className="crew-wrapper">
        <p className="crew-quote-top">
          “The strength of SEC is each individual member and the strength of each member is SEC.”
        </p>

        <TeamPanel title="Secretariat" members={secretariat} />
        <TeamPanel title="Tech Team" members={techTeam} />
        <TeamPanel title="Content Team" members={contentTeam} />
      </div>
    </section>
  );
}

export default Crew;
