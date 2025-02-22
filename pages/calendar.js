import Layout from '../components/Layout';

export default function Calendar() {
  const events = [
    { date: '2025-03-01', title: 'Project Launch' },
    { date: '2025-04-15', title: 'Speaking at [Event]' },
    { date: '2025-06-10', title: 'Summer Break' },
  ];

  return (
    <Layout>
      <section className="calendar">
        <h2 className="section-title">Calendar</h2>
        <div className="calendar-grid">
          {events.map((event, index) => (
            <div key={index} className="calendar-event">
              <span className="event-date">{new Date(event.date).toLocaleDateString()}</span>
              <span className="event-title">{event.title}</span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
