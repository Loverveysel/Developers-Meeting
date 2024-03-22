import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()

    try {
        const savedPost = await prisma.savedPost.create({
            data: {
                post:{
                    connect: {
                        id: body.postId
                    }
                },
                user: {
                    connect: {
                        id: body.userId
                    }
                }
            }
        })
        
        return NextResponse.json(savedPost, {status: 201})
    } catch (error) {
        return NextResponse.json({error}, {status: 400})
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const body = await req.json()

    try {
        const savedPost = await prisma.savedPost.deleteMany({
            where: {
                postId: body.postId,
                userId: body.userId
            }
        })
        
        return NextResponse.json(savedPost, {status: 201})
    } catch (error) {
        return NextResponse.json({error}, {status: 400})
    }
}