import { Session } from "next-auth";
import prisma from "@/lib/prisma";

export async function findUser(session: Session |null) {
    const email = session?.user?.email as string

    if (email) {
        const user = await prisma.user.findUnique({
            where:{
                email
            },
            include:{
                posts: {
                    include: {
                        badIdeas: true,
                        goodIdeas: true,
                        interests: true,
                        chatGroup: {
                            include: {
                                members: true,
                                invitations: {
                                    include: {
                                        sender: true
                                    }
                                },
                            },
                        }
                    }
                },
                chatGroups: {
                    include: {
                        chatGroup: {
                            include: {
                                messages: {
                                    include:{
                                        sender: true,
                                    }
                                },
                                members: true
                            }
                        },
                    }
                },
                badIdeas: true,
                goodIdeas: true,
                interests:true
            }
        })
        return user        
    }else{
        return null
    }

}