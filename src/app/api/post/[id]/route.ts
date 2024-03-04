import prisma from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, context: any) {
    const { id } = context.params
    
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
            include: {
                goodIdeas: true,    
                badIdeas: true,
                interests: true,
                user: true
              }
        })
    
        return NextResponse.json(post, {status: 200})    
    } catch (error) {
        return NextResponse.json({error}, {status: 400})
    }
}