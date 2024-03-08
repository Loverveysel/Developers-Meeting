import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST (req: NextRequest, res: NextResponse){
    try {
        const body = await req.json()

        if (body.target == "create") {
            const badIdea = await prisma.badIdea.create({
                data: {
                    post: {
                    connect: { id: body.postId } 
                    },
                    user: {
                    connect: { id: body.userId } 
                    }
                }
            })
        
            return NextResponse.json(badIdea, {status: 201})
        }
        else{
            const deleted = await prisma.badIdea.deleteMany({
                where : {
                    userId : body.userId,
                    postId: body.postId
                }
            })
            return NextResponse.json(deleted, {status: 201})
        }
    } catch (error) {
        return NextResponse.json({error: "Could not create or deleted bad idea"}, {status: 404})
    }
}