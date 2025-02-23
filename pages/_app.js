import '../styles/globals.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const follower = document.createElement('div');
    follower.className = 'cursor-follow';
    document.body.appendChild(follower);

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      follower.style.transform = `translate(${x}px, ${y}px)`;
    };

    const hoverCursor = () => cursor.classList.add('cursor-hover');
    const leaveCursor = () => cursor.classList.remove('cursor-hover');

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .glass-card').forEach(el => {
      el.addEventListener('mouseenter', hoverCursor);
      el.addEventListener('mouseleave', leaveCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(follower);
    };
  }, []);

  return <Component {...pageProps} />;
}
