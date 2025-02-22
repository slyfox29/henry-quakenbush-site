import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <nav className="nav">
      <Link href="/" className="nav-link">Home</Link>
      <Link href="/about" className="nav-link">About</Link>
      <Link href="/blog" className="nav-link">Blog</Link>
      <Link href="/calendar" className="nav-link">Calendar</Link>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="toggle-checkbox"
        />
        <label htmlFor="dark-mode-toggle" className="toggle-label">
          <span className="toggle-inner" />
          <span className="toggle-switch" />
        </label>
      </div>
    </nav>
  );
}
