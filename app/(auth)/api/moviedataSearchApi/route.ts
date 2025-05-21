import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const search = await req.json();
    const MovieName = search.name;
    let url = `http://www.omdbapi.com/?apikey=${process.env.MOVIE_API_KEY}&s=${MovieName}`;
    const response = await axios.get(url);
    const data = response.data;
    return NextResponse.json(data);
}