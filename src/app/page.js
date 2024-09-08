// src/app/page.js
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url(/images/mvpbg.webp)' }} // Update the path to your image
    >
      <h1 className="text-5xl font-bold text-pink-600">Welcome to Jabalpur Railway Station Navigation</h1>
      <p className="mt-6 text-2xl text-pink-950">Find your way around the station with ease.</p>
      <Link href="/map">
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Explore the Station</button>
      </Link>
    </div>
  );
}
