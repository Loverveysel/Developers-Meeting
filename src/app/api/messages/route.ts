import { NextRequest, NextResponse } from "next/server"
import authOptions from "../auth/[...nextauth]/options"
import prisma from "@/utils/prisma"
import { checkAuthA } from "@/lib/checkAuth"

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const message = await req.json()
        const session = await checkAuthA(req, res)

        const user = await prisma.user.findUnique({
          where:{
            email: session?.user?.email ?? ""
          }
        })

        const newMessage = await prisma.chatMessage.create({
            data:{
                content: message.content,
                chatGroup: {
                    connect : {id : message.chatGroupId}
                },
                sender: {
                    connect: {id : user ? user.id : ""}
                }            
            }
        })

        return NextResponse.json(newMessage, {status:201})
    } catch (error) {
        console.log(error)
        
        return NextResponse.json({error: "Could not created message"}, {status:404})
    }
}