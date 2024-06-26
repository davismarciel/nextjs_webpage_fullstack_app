'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
