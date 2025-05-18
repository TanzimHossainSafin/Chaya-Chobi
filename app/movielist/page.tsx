import axios from "axios";;
export default async function MovielistPage() {
    const movielist=await axios.get("http://localhost:3000/api/movielistApi");
    return (
 <ul>
  {movielist.data.map((movie: any) => (
    <li key={movie.id}>
    <h1>Movie Name</h1>
      {movie.name} - {movie.description}
      <h1>Movie Review</h1>
      {movie.review}
      <h1>Movie Rating</h1>
      {movie.rating}
    </li>  
  ))}
</ul> 
    )
}
