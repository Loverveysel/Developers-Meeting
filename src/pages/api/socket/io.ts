import type { NextApiRequest } from "next"
import type { NextApiResponseWithSocket } from "@/types/socket"
import { Server } from "socket.io"

const socketHandler = async (req: NextApiRequest, res: NextApiResponseWithSocket) => {
    if (!res.socket.server.io) {
        const path = "/api/socket/io"
        const httpServer = res.socket.server as any
        const io = new Server(httpServer, {
          path: path,
          addTrailingSlash: false,
          transports: ["polling", "websocket"]
        })
        
        res.socket.server.io = io
    }
    
    res.end()
}

export default socketHandler