import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST (req: NextRequest, res: NextResponse){
    try {
        const body = await req.json()

        if (body.target == "create") {
            const goodIdea = await prisma.goodIdea.create({
                data: {
                post: {
                    connect: { id: body.postId } // post'u connect ile bağla
                },
                user: {
                    connect: { id: body.userId } // user'ı connect ile bağla
                }
                }
            })

            return NextResponse.json(goodIdea, {status: 201})
        }else{
            const deleted = await prisma.goodIdea.deleteMany({
                where : {
                    userId : body.userId,
                    postId: body.postId
                }
            })
            
            return NextResponse.json(deleted, {status: 201})
        }
    } catch (error) {
        NextResponse.json({error: "Could not create or delete good idea"}, {status: 404})
    }
}