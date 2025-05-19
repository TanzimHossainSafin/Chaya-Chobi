import { NextResponse,NextRequest } from "next/server";;
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
export async function POST(req:NextRequest,res:NextResponse){
    const session = await auth();
    const details=await req.json();
    const userName=session?.user?.name;
    const userEmail=session?.user?.email;
    const {name,description,review,rating}=details;
    const movielist=await prisma.movielist.create({
        data:{
            name:name,
            description:description,
            review:review,
            rating:rating?Number(rating):0,
            userName:userName,
            userEmail:userEmail,
        } 
    })
    return NextResponse.json(movielist);
}
export async function GET(req:NextRequest){
    const movielist=await prisma.movielist.findMany();
    return NextResponse.json(movielist);
}
export async function DELETE(req:NextRequest){
    const details=await req.json();
    const {id}=details;
    const movieDelete=await prisma.movielist.delete({
        where:{
            id:Number(id),
        }
    })
    return NextResponse.json(movieDelete);
}
export async function PUT(req:NextRequest){
    const details=await req.json();
    const {id,name,description,review,rating}=details;
    const movieUpdate=await prisma.movielist.update({
        where:{id:Number(id)},
        data:{name,description,review,rating:rating?Number(rating):0},
    })
    return NextResponse.json(movieUpdate);
}
