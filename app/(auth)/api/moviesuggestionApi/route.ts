import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
export async function POST(req: Request) {
    const session = await auth();
    const userName=session?.user?.name;
    const movieDetails=await req.json();
    const movieWatched=await prisma.movielist.findMany({
        where: {
            userName:userName
        }
    });
    const headers = { Authorization: `Bearer ${process.env.Token}` };
    const url = "https://api.edenai.run/v2/llm/chat";
    const body = {
        model: "openai/gpt-4",
        messages: [
            {
                role: "user",
                content: `
You are a movie recommendation expert.
User's request: "${movieDetails.movieName || movieDetails}"
Movies/series already watched by the user: ${movieWatched.length > 0 ? movieWatched.map(movie => `"${movie.name}"`).join(", ") : "None"}

Based on the user's request and the movies/series they have already watched, suggest 5 new movies or series that the user is likely to enjoy. 
Avoid recommending any movie/series the user has already watched. 
For each suggestion, provide a short reason why it matches the user's taste.
Reply in a friendly and concise way.
`
            }
        ]
    };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    return NextResponse.json(result.choices[0].message.content);
}