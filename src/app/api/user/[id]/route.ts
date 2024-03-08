import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, context: any) {
    const { id } = context.params
    
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                country: true,
                educationExperience: true,
                firstName: true,
                domains: true,
                programmingLanguages: true,
                profilePicture: true,
                biography: true,
                posts: {
                    include: {
                        badIdeas: true,
                        goodIdeas: true,
                        interests: true,
                        user: true
                    }
                },
                
            }
        })        

        return NextResponse.json(user, {status: 200})
    } catch (error) {        
        return NextResponse.json({error}, {status: 400})
    }
    
}