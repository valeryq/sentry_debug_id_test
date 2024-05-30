'use client';

import styles from "./page.module.css";

export default function EventHandler() {
  const handleClick = () => {
    throw new Error('debug_id is missing with Route Group in event handler');
  };

  return (
    <main className={styles.main}>
      <button onClick={handleClick}>
        Click to throw an Error in app/(general)/event-handler/page.tsx
      </button>
    </main>
  );
}
