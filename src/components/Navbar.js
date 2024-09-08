import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <Link 
            href="/"
            className="text-white text-lg font-bold">Railway Station Navigation
        </Link>
      </div>
    </nav>
  );
}
