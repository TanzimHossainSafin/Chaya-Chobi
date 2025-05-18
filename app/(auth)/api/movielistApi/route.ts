import { NextResponse,NextRequest } from "next/server";;
import { prisma } from "@/lib/prisma";
export async function POST(req:NextRequest){
    const details=await req.json();
    const {name,description,review,rating}=details;
    const movielist=await prisma.movielist.create({
        data:{
            name:name,
            description:description,
            review:review,
            rating:rating,
        } 
    })
    return NextResponse.json(movielist);
}
export async function GET(req:NextRequest){
    const movielist=await prisma.movielist.findMany();
    return NextResponse.json(movielist);
}