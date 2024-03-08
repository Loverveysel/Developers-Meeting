import { NextRequest, NextResponse } from "next/server"
import { checkAuthA } from "@/lib/checkAuth"
import prisma from "@/lib/prisma"

export async function GET(req: NextRequest, context : any) {
    const { params } = context
    
    try {
        const res = new NextResponse()
        const session = await checkAuthA(req, res)
        
        const user = await prisma.user.findUnique({
            where:{
                email: session?.user?.email ?? ""
            },
            include:{
                messages: true,
                chatGroups: true
            }
        })

        
        const groups = await prisma.chatGroup.findMany({
            where:{
                name: params.group,
                members:{
                    every:{
                        user:{
                            id: user?.id
                        }   
                    }
                },
                
            },
            include: {
                messages: true,
                members: true
            }
        })

        console.log(groups)
        
        if (groups.length > 0) {
            const messages = groups[0].messages;
            return NextResponse.json(messages, { status: 201 });
          } else {
            console.log(params.group);
            
            return NextResponse.json({ error: "Group not found" }, { status: 404 });
          }
    } catch (error) {
        console.log(error)
        
        return NextResponse.json(error, {status: 404})
    }

}