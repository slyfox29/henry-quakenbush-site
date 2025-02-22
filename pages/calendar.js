import Layout from '../components/Layout';

export default function Calendar() {
  const events = [
    { date: '2025-02-01', title: 'Project Kickoff' },
    { date: '2025-02-15', title: 'Blog Update' },
    { date: '2025-02-21', title: 'Site Launch' },
  ];

  const month = '2025-02'; // February 2025
  const daysInMonth = new Date(2025, 1, 0).getDate(); // 28 days
  const firstDay = new Date(2025, 1, 1).getDay(); // Sunday = 0, Monday = 1, etc.
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array(firstDay).fill(null); // Offset for first day

  return (
    <Layout>
      <section className="calendar">
        <h2 className="section-title">February 2025</h2>
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
