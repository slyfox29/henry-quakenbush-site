import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-link">Home</Link>
      <Link href="/about" className="nav-link">About</Link>
      <Link href="/blog" className="nav-link">Blog</Link>
      <Link href="/calendar" className="nav-link">Calendar</Link>
    </nav>
  );
}
