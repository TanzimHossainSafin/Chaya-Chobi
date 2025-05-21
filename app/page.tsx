"use client";
import InputSearch from "./components/MovieSearch";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 pb-24 bg-transparent">
      {/* Hero Section */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-xl">
        Welcome to Chaya Chobi
      </h1>
      <p className="text-lg text-gray-500 text-center mb-10 max-w-2xl animate-fade-in-slow">
        Your are just one step away from discovering your favorite movies
      </p>
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600 animate-fade-in">
          Search for your favorite movies
        </h2>
        <InputSearch />
      </div>
    </div>
  );
}

