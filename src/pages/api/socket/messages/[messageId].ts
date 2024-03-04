import { checkAuthB } from "@/lib/checkAuth";
import { NextApiResponseWithSocket } from "@/types/socket"
import prisma from "@/utils/prisma"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"
import { findUser } from "@/lib/findUser";

const handler = async (req: NextApiRequest, res: NextApiResponseWithSocket)=>{
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    try {
        const { messageId } = req. query

        const resp = new NextResponse()
        const session = await checkAuthB(req, resp)
        const user = await findUser(session)

        const message = await prisma.chatMessage.findUnique({
            where: {
                id: messageId as string,
                senderId: user?.id || ""  
            },
            include:{
                chatGroup:{
                    include:{
                        members: true
                    },
                },
                sender: true
            }
        })
    
        const groupId = message?.chatGroupId as string || ""
        const key = "message:" + groupId        

        res.socket.server.io?.emit(key, message)
                
        return res.status(201).json("Success")  
    } catch (error) {
        return res.status(404).json({error: "Could not publish the message"})
    }
}

export default handler