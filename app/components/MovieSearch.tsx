"use client";
import { useRef, useState } from "react";
import axios from "axios";

export default function InputSearch() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [movies, setMovies] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        const movieName = inputRef.current?.value;
        setError(null);
        setMovies([]);
        if (!movieName) {
            setError("Please enter a movie name.");
            return;
        }
        try {
            const response = await axios.post("/api/moviedataSearchApi", {
                name: movieName
            });
            if (response.data && response.data.Search) {
                setMovies(response.data.Search);
            } else {
                setError("No movies found.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="w-full flex flex-col items-center min-h-[60vh] pt-16 pb-16 md:pt-24 md:pb-24">
            <div className="flex gap-2 w-full max-w-md mb-8 sticky top-8 z-10 bg-white shadow-lg rounded-xl p-2">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for a movie..."
                    className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 bg-white text-base outline-none placeholder-gray-400 text-black font-bold  "
                />
                <button
                    className="px-5 py-2 rounded-r-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow transition-all duration-150 cursor-pointer"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <div className="w-full flex justify-center">
                {movies.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl mt-2">
                        {movies.map((movie) => (
                            <div key={movie.imdbID} className="bg-white rounded-lg shadow p-3 flex flex-col items-center">
                                <img
                                    src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                                    alt={movie.Title}
                                    className="w-28 h-40 object-cover rounded mb-2 border"
                                />
                                <h2 className="text-base font-medium text-center text-black font-bold">{movie.Title}</h2>
                                <p className="text-gray-500 text-sm">{movie.Year}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}