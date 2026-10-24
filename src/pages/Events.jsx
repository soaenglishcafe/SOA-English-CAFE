import { useState } from "react";
import "../styles/Events.css";

const filters = [
  { key: "all", label: "All Events" },
  { key: "flagged", label: "Flagged Events" },
  { key: "internals", label: "Internals" },
  { key: "special", label: "Special" },
  { key: "podcasts", label: "Podcasts" },
];

const weeklySchedule = [
  {
    month: "01",
    day: "01",
    weekday: "LIVE",
    tag: "Special",
    title: "Softskill program",
    description: "Enhances Communication skills and career-ready interview confidence.",
    time: "Live",
    category: "special",
    location: "SOA English Café",
    dateISO: "2026-01-01T18:00:00",
  },
  {
    month: "02",
    day: "02",
    weekday: "REGULAR",
    tag: "Flagged Events",
    title: "Beyond the Degree",
    description: "Flagship program for students seeking clarity beyond academics.",
    time: "Every Year",
    category: "flagged",
    location: "SOA English Café",
    dateISO: "2026-02-02T18:00:00",
  },
  {
    month: "03",
    day: "03",
    weekday: "URGENT",
    tag: "Internal",
    title: "Urgent Call",
    description: "An internal priority event for focused participation and team readiness.",
    time: "Internal",
    category: "internals",
    location: "Internal",
    dateISO: "2026-03-03T18:00:00",
  },
  {
    month: "04",
    day: "04",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 4",
    description: "Flagged events, internals, and special initiatives for active engagement.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-04-04T18:00:00",
  },
  {
    month: "05",
    day: "05",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 5",
    description: "Community-led learning, networking, and confidence-building opportunities.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-05-05T18:00:00",
  },
  {
    month: "06",
    day: "06",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 6",
    description: "A high-impact event designed to create visible growth and confidence.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-06-06T18:00:00",
  },
  {
    month: "07",
    day: "07",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 7",
    description: "Flagged events, internals, and special initiatives for active engagement.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-07-07T18:00:00",
  },
  {
    month: "08",
    day: "08",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 8",
    description: "A collaborative event focused on leadership, expression, and clarity.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-08-08T18:00:00",
  },
  {
    month: "09",
    day: "09",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 9",
    description: "Opportunities to sharpen communication and strengthen public confidence.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-09-09T18:00:00",
  },
  {
    month: "10",
    day: "10",
    weekday: "FLAGGED",
    tag: "Flagged Events",
    title: "Event 10",
    description: "Connection-focused event built to transform hesitation into confident action.",
    time: "TBA",
    category: "flagged internals special",
    location: "SOA English Café",
    dateISO: "2026-10-10T18:00:00",
  },
  {
    month: "11",
    day: "11",
    weekday: "PODCAST",
    tag: "Podcast",
    title: "Event 11",
    description: "A podcast-based discussion around growth, learning, and communication.",
    time: "Podcast",
    category: "podcasts",
    location: "SOA English Café",
    dateISO: "2026-11-11T18:00:00",
  },
  {
    month: "12",
    day: "12",
    weekday: "PODCAST",
    tag: "Podcast",
    title: "Event 12",
    description: "A short, relevant discussion on confidence, communication, and career confidence.",
    time: "Podcast",
    category: "podcasts",
    location: "SOA English Café",
    dateISO: "2026-12-12T18:00:00",
  },
  {
    month: "13",
    day: "13",
    weekday: "PODCAST",
    tag: "Podcast",
    title: "Event 13",
    description: "A podcast session focused on leadership, listening, and personal growth.",
    time: "Podcast",
    category: "podcasts",
    location: "SOA English Café",
    dateISO: "2026-01-13T18:00:00",
  },
  {
    month: "14",
    day: "14",
    weekday: "PODCAST",
    tag: "Podcast",
    title: "Event 14",
    description: "New ideas, practical lessons, and a stronger mindset for real-world success.",
    time: "Podcast",
    category: "podcasts",
    location: "SOA English Café",
    dateISO: "2026-01-14T18:00:00",
  },
  {
    month: "15",
    day: "15",
    weekday: "PODCAST",
    tag: "Podcast",
    title: "Event 15",
    description: "A quick, engaging podcast format for learning, reflection, and growth.",
    time: "Podcast",
    category: "podcasts",
    location: "SOA English Café",
    dateISO: "2026-01-15T18:00:00",
  },
  {
    month: "16",
    day: "16",
    weekday: "PODCAST",
    tag: "Podcast",
    title: "Event 16",
    description: "A recurring podcast segment built for practical communication and confidence.",
    time: "Podcast",
    category: "podcasts",
    location: "SOA English Café",
    dateISO: "2026-01-16T18:00:00",
  },
];

function Events() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleSchedule =
    activeFilter === "all"
      ? weeklySchedule
      : weeklySchedule.filter((item) => item.category.includes(activeFilter));

  const addToCalendar = (title, startISO, location) => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&location=${encodeURIComponent(location)}&details=${encodeURIComponent("Programação da Agenda Semanal MEVAM Ministério")}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section className="events-page">
      <div className="events-page__ambient events-page__ambient--radial" aria-hidden="true" />
      <div className="events-page__ambient events-page__ambient--accent" aria-hidden="true" />

      <div className="events-page__hero">
        <div className="events-page__hero-card">
          <div className="events-page__hero-badge">
            <span className="events-page__dot" />
            ONGOING EVENT
          </div>
          <h1>SOFT SKILL PROGRAM 2026</h1>
          <div className="events-page__hero-copy">
            <p>
              Don't let the nervousness and lack of confidence ruin the hardships you have put to get
              selected in your dream job in the final round of interview.
            </p>
            <p className="events-page__hero-subtitle">How will SOFT SKILLS PROGRAM be Beneficial for you?</p>
            <ul>
              <li>Enhances Communication skills.</li>
              <li>Learn about Group Discussions(GDs), Interview preparations and Presentations.</li>
              <li>Expand your Network by showcasing Leadership skills during teamwork.</li>
            </ul>
            <p className="events-page__hero-subtitle">REWARDS:-</p>
            <ul>
              <li>Participation Certificates upon program completion.</li>
              <li>Special Rewards for the top students.</li>
            </ul>
            <p>
              So, don't let this opportunity go by thinking you have much time. Turn your weakness into
              the biggest strength so that you'll not regret it when time slips!
            </p>
          </div>
        </div>

        <div className="events-page__next-event">
          <div className="events-page__next-event-date">
            <span>LIVE</span>
            <strong>NOW</strong>
          </div>
          <div className="events-page__next-event-copy">
            <span>Softskill program</span>
            <p>Interview Confidence &amp; Growth</p>
            <small>
              <i className="fa-regular fa-clock" /> Ongoing • SOA English Café
            </small>
          </div>
        </div>
      </div>

      <div className="events-page__schedule-shell" id="agenda">
        <aside className="events-page__watermark" aria-hidden="true">
          SOA ENGLISH CAFÉ
        </aside>

        <div className="events-page__schedule-panel">
          <div className="events-page__filters" data-purpose="schedule-filters">
            <div className="events-page__filter-list" id="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  className={
                    activeFilter === filter.key
                      ? "events-page__filter events-page__filter--active"
                      : "events-page__filter"
                  }
                  onClick={() => setActiveFilter(filter.key)}
                  data-filter={filter.key}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>

          <div className="events-page__items" id="agenda-items-container">
            {visibleSchedule.map((entry) => (
              <article
                key={`${entry.month}-${entry.day}`}
                className="events-page__item"
                data-category={entry.category}
              >
                <div className="events-page__date-block">
                  <div className="events-page__date-box">
                    <span>{entry.month}</span>
                    <strong>{entry.day}</strong>
                  </div>
                  <div className="events-page__date-divider" aria-hidden="true" />
                  <div className="events-page__details">
                    <div className="events-page__heading-row">
                      <span className="events-page__weekday">{entry.weekday}</span>
                      <span className="events-page__tag">{entry.tag}</span>
                    </div>
                    <h2>{entry.title}</h2>
                    <p>{entry.description}</p>
                  </div>
                </div>

                <div className="events-page__meta">
                  <div className="events-page__time-pill">
                    <i className="fa-regular fa-clock" />
                    <span>{entry.time}</span>
                  </div>
                 
                </div>
              </article>
            ))}
          </div>

         
        </div>
      </div>

   
    </section>
  );
}

export default Events;