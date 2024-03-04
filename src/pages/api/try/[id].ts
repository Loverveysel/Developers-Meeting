import { NextApiRequest, NextApiResponse } from "next";

const socketHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    res.status(200).json({message: "Hello world" + id})
}

export default socketHandler