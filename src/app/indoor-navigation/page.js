"use client"
import React from 'react';
import MapComponent1 from './MapComponent1';

export default function IndoorNavigationPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Indoor Navigation</h1>
      {/* Add content for Indoor Navigation page here */}
      <MapComponent1 />
    </div>
  );
}


