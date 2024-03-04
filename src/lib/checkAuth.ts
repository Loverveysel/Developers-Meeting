import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import authOptions from "../app/api/auth/[...nextauth]/options"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export async function checkAuthA(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(
    req as unknown as NextApiRequest,
    {
      ...res,
      getHeader: (name: string) => res.headers?.get(name),
      setHeader: (name: string, value: string) => res.headers?.set(name, value),
    } as unknown as NextApiResponse,
    authOptions
  )
  return session
}

export async function checkAuthB(req: NextApiRequest, res: NextResponse) {
  const session = await getServerSession(
    req as unknown as NextApiRequest,
    {
      ...res,
      getHeader: (name: string) => res.headers?.get(name),
      setHeader: (name: string, value: string) => res.headers?.set(name, value),
    } as unknown as NextApiResponse,
    authOptions
  )
  return session
}