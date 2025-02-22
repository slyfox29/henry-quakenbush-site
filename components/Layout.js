import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer>© 2025 Henry Quakenbush</footer>
    </>
  );
}
