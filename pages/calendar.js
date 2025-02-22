import Layout from '../components/Layout';
import events from '../data/events.json';

export default function Calendar() {
  const month = '2025-03'; // March 2025 as example
  const daysInMonth = new Date(2025, 2, 0).getDate(); // 31 days
  const firstDay = new Date(2025, 2, 1).getDay(); // Sunday = 0, etc.
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array(firstDay).fill(null);

  return (
    <Layout>
      <section className="calendar">
        <h2 className="section-title illuminated">March 2025</h2>
        <div className="calendar-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="calendar-header">{day}</div>
          ))}
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="calendar-day empty"></div>
          ))}
          {days.map((day) => {
            const dateString = `${month}-${String(day).padStart(2, '0')}`;
            const event = events.find((e) => e.date === dateString);
            return (
              <div key={day} className={`calendar-day ${event ? 'has-event' : ''}`}>
                <span className="day-number">{day}</span>
                {event && <span className="event-title">{event.title}</span>}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
