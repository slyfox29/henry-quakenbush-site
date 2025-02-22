import Layout from '../components/Layout';
import events from '../data/events.json';

export default function Calendar() {
  const today = new Date('2025-02-22'); // Using your current date; replace with `new Date()` for real-time
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-based (0 = Jan, 1 = Feb, etc.)
  const monthName = today.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // Sunday = 0
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array(firstDay).fill(null);
  const currentDay = today.getDate(); // 22 for Feb 22, 2025

  return (
    <Layout>
      <section className="calendar">
        <h2 className="section-title illuminated">{`${monthName} ${year}`}</h2>
        <div className="calendar-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="calendar-header">{day}</div>
          ))}
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="calendar-day empty"></div>
          ))}
          {days.map((day) => {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const event = events.find((e) => e.date === dateString);
            const isToday = day === currentDay;
            return (
              <div
                key={day}
                className={`calendar-day ${event ? 'has-event' : ''} ${isToday ? 'current-day' : ''}`}
              >
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
