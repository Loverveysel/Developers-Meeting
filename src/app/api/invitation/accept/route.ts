import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    const invitation = body.invitation

    try {
        const updatedChatGroup = await prisma.chatGroup.update({
            where: {
                id: invitation.chatGroupId
            },
            data: {
                members: {
                    create: {
                        user: {
                          connect: {
                            id: invitation.senderId
                          }
                        }
                    }
                }
            }
        })

        const deletedInvitation = await prisma.invitation.delete({
            where: {
                id: invitation.id
            }
        })

        return NextResponse.json(updatedChatGroup, {status: 200})
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({error}, {status: 400})
    }
}