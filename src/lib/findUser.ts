import { Session } from "next-auth";
import prisma from "@/lib/prisma";
import { log } from "console";

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
                                        sender: true,
                                        chatGroup: true
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
                interests:true,
                savedPosts: {
                    include: {
                        post: {
                            include: {
                                goodIdeas: true,    
                                badIdeas: true,
                                interests: true,
                                user: true
                              },
                        }
                    }
                },
                Invitations:{
                    include:{
                        sender: true,
                        chatGroup: true
                    }
                }
            }
        })
        return user        
    }else{
        return null
    }

}