import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const invitation = await req.json()

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