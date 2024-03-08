import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const body = await req.json()
    
        if (body.target == "create") {
            const interest = await prisma.interest.create({
                data: {
                    post: {
                        connect: { id: body.postId } 
                    },
                    user: {
                        connect: { id: body.userId } 
                    }
                }
            })

            const post = await prisma.post.findUnique({
                where: {
                    id: body.postId
                },
                include: {
                    chatGroup: {
                        include: {
                            members: true
                        }
                    }
                }
            })            

            const invitation = await prisma.invitation.create({
                data: {
                    sender: {
                        connect: {
                            id: body.userId
                            }
                        },
                    chatGroup: {
                        connect: {
                            id: post ? post.chatGroup[0].id : ""  
                            }
                        },
                    interest: {
                        connect: {
                            id: interest.id
                            }
                        },
                    }        
                }
            )

            return NextResponse.json(interest, {status: 201})
        }
        else{
            const interest = await prisma.interest.findMany({
                where: {
                    userId: body.userId,
                    postId: body.postId
                },
                include: {
                    invitation: true
                }
            })

            if (interest[0].invitation.length > 0) {
                const deletedInvitation = await prisma.invitation.deleteMany({
                    where : {
                        interestId : interest[0].id
                    }
                })                
            }


            const deleted = await prisma.interest.deleteMany({
                where : {
                    userId : body.userId,
                    postId: body.postId,
                }
            })


            return NextResponse.json(deleted, {status: 201})
        }
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({error: "Could not create or delete interest"}, {status: 404})
    }
}