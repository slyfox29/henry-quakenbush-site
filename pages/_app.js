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

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.3; // Faster response
      cursorY += (mouseY - cursorY) * 0.3;
      followerX += (mouseX - followerX) * 0.1; // Smoother follower
      followerY += (mouseY - followerY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      follower.style.left = `${followerX - 20}px`; // Center follower
      follower.style.top = `${followerY - 20}px`;

      requestAnimationFrame(animate);
    };

    const hoverCursor = () => cursor.classList.add('cursor-hover');
    const leaveCursor = () => cursor.classList.remove('cursor-hover');

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .glass-card, select').forEach(el => {
      el.addEventListener('mouseenter', hoverCursor);
      el.addEventListener('mouseleave', leaveCursor);
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(follower);
    };
  }, []);

  return <Component {...pageProps} />;
}
