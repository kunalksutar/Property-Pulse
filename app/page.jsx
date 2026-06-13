import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
        <h1 className = "text-3xl">Home Page</h1>
        <Link href="/properties">Show Properties</Link>
    </div>
  )
}

export default HomePage
