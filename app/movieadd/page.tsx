"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function MovieListPage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const review = useRef<HTMLInputElement>(null);
  const rating = useRef<HTMLInputElement>(null);

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
            </div>
            <div className="flex gap-2">
              <button
                className="bg-green-500 px-4 py-1 text-black rounded"
                onClick={() => handleEdit(movie)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}