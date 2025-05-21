"use client"
import axios from "axios";
import { useRef, useState } from "react";

export default function MoviesuggestionPage() {
    const movieInputRef = useRef<HTMLInputElement>(null);
    const [movieSuggestion, setMovieSuggestion] = useState<string>("");
    const [loading, setLoading] = useState(false);
    //handel request to api
    const handleMovieSuggestion = async () => {
        setLoading(true);
        try {
            const response = await axios.post("/api/moviesuggestionApi", {
                movieName: movieInputRef.current?.value
            });
            setMovieSuggestion(response.data);
        } catch (e) {
            setMovieSuggestion("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-2">
            {/* Input & Button Section */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4">
                {/* Agent SVG */}
                <div className="flex justify-center mb-2">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="22" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
                        <ellipse cx="24" cy="28" rx="12" ry="8" fill="#fff" stroke="#6366f1" strokeWidth="1.5"/>
                        <circle cx="18" cy="26" r="2" fill="#6366f1"/>
                        <circle cx="30" cy="26" r="2" fill="#6366f1"/>
                        <path d="M20 32 Q24 35 28 32" stroke="#6366f1" strokeWidth="1.5" fill="none"/>
                        <rect x="20" y="12" width="8" height="4" rx="2" fill="#6366f1"/>
                    </svg>
                </div>
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">Ask Chobi AI</h1>
                <div className="flex flex-row gap-2 w-full">
                    <input
                        type="text"
                        ref={movieInputRef}
                        placeholder="Enter Your Question..."
                        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                        disabled={loading}
                    />
                    <button
                        onClick={handleMovieSuggestion}
                        className="bg-blue-500 hover:bg-blue-600 text-black font-medium px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                        disabled={loading}
                    >
                        {loading && (
                            <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        )}
                        {loading ? "Loading..." : "Suggest"}
                    </button>
                </div>
            </div>
            {/* Response Section */}
            <div className="w-full max-w-sm mt-6 flex justify-center">
                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl shadow p-5 min-h-[48px] flex items-center justify-center break-words text-center transition-all duration-200">
                    <span className="text-base font-medium text-gray-800 w-full">{movieSuggestion || "AI's suggestion will appear here."}</span>
                </div>
            </div>
        </div>
    );
}
