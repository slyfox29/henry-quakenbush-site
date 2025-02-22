import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>© 2025 Henry Quakenbush. Crafted with care.</p>
      </footer>
    </div>
  );
}

