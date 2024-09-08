"use client"
import React from 'react';
import MapComponent from './MapComponent';
import Link from 'next/link';

export default function MapPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <Link href="/indoor-navigation">
        <button className="mt-6 mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Indoor Navigation
        </button>
      </Link>
      <MapComponent />
    </div>
  );
}
