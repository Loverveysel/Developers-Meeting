import prisma from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    const invitation = body.invitation
    console.log(invitation);
    
    try {
        const deletedInvitation = await prisma.invitation.delete({
            where: {
                id: invitation.id
            }
        })

        return NextResponse.json(deletedInvitation, {status: 200})
    } catch (error) {        
        return NextResponse.json({error}, {status: 400})
    }
}