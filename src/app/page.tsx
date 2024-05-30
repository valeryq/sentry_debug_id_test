'use client';

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    throw new Error('Here present "debug_id" in event handler');
  };

  return (
    <main className={styles.main}>
      <div>
        <button onClick={handleClick}>Click to throw an Error in app/page.tsx</button>
      </div>

      <div>
        <Link href="/event-handler">Error in a Route Group in event handlers</Link>
      </div>
      <div>
        <Link href="/render">Error in a Route Group in render function</Link>
      </div>
    </main>
  );
}
