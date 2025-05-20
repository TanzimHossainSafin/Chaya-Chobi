"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function MovieListPage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const review = useRef<HTMLInputElement>(null);
  const rating = useRef<HTMLInputElement>(null);
  //dynamic user email
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;

  async function fetchMovies() {
    const res = await axios.get("/api/movielistApi");
    setMovies(res.data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      name: name.current?.value,
      description: description.current?.value,
      review: review.current?.value,
      rating: rating.current?.value ? Number(rating.current.value) : 0,
    };

    if (editId) {
      await axios.put("/api/movielistApi", { id: editId, ...data });
      setEditId(null);
    } else {
      await axios.post("/api/movielistApi", data);
    }
    if (name.current) name.current.value = "";
    if (description.current) description.current.value = "";
    if (review.current) review.current.value = "";
    if (rating.current) rating.current.value = "";
    fetchMovies();
  }

  async function handleDelete(id: number) {
    await axios.delete("/api/movielistApi", { data: { id } });
    fetchMovies();
  }

  function handleEdit(movie: any) {
    setEditId(movie.id);
    
    if (name.current) name.current.value = movie.name;
    if (description.current) description.current.value = movie.description;
    if (review.current) review.current.value = movie.review;
    if (rating.current) rating.current.value = movie.rating;
  }
  return (
    <div className="max-w-xl mx-auto mt-10">
      <svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4"
      >
        <rect x="5" y="10" width="70" height="85" rx="8" fill="#ffe066" stroke="#222" strokeWidth="3"/>
        <rect x="15" y="20" width="50" height="40" rx="5" fill="#fff" stroke="#222" strokeWidth="2"/>
        <ellipse cx="40" cy="60" rx="18" ry="8" fill="#f783ac" stroke="#222" strokeWidth="2"/>
        <circle cx="30" cy="40" r="5" fill="#222"/>
        <circle cx="50" cy="40" r="5" fill="#222"/>
        <path d="M33 50 Q40 55 47 50" stroke="#222" strokeWidth="2" fill="none"/>
        <rect x="25" y="75" width="30" height="8" rx="2" fill="#222"/>
        <text x="40" y="82" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold" fontFamily="Arial">MOVIE</text>
      </svg>
      <h1 className="text-2xl font-bold mb-4">Add Your Favourite Movie</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input type="text" placeholder="Movie Name" ref={name} required />
        <input type="text" placeholder="Description" ref={description} required />
        <input type="text" placeholder="Review" ref={review} required />
        <input type="number" placeholder="Rating" ref={rating} required min={0} max={10} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editId ? "Update Movie" : "Add Movie"}
        </button>
        {editId && (
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={() => {
              setEditId(null);
              if (name.current) name.current.value = "";
              if (description.current) description.current.value = "";
              if (review.current) review.current.value = "";
              if (rating.current) rating.current.value = "";
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{movie.name}</div>
              <div className="text-md">{movie.description}</div>
              <div className="text-x text-gray-500">{movie.review}</div>
              <div className="text-x">Rating: {movie.rating}</div>
              <div className="text-x">By: {movie.userName}</div>
              <div className="text-x">Email: {movie.userEmail}</div>
            </div>
            <div className="flex gap-2">
              {movie.userEmail === currentUserEmail && (
                <button
                  className="bg-green-500 px-4 py-1 text-black rounded"
                  onClick={() => handleEdit(movie)}
                >
                  Edit
                </button>
              )}
              {movie.userEmail === currentUserEmail && (<button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}