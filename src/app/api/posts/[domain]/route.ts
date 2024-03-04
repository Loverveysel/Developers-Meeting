import { NextRequest, NextResponse } from "next/server"
import prisma from "@/utils/prisma"
import { checkAuthA } from "@/lib/checkAuth"
import { findUser } from "@/lib/findUser"

export async function GET(req: NextRequest, context: any) {
    const { domain } = context.params

    const res = new NextResponse()
    const session = await checkAuthA(req, res)
    
    const user = await findUser(session)
    
    const userProgrammingLanguages = user?.programmingLanguages
    const userDomains = user?.domains
    const userCountry = user?.country

    const domainArray = domain.split("&")
    
    const relevantPosts = await prisma.post.findMany({
        where: {
            AND: [
                {
                    domains: {
                        hasSome: domainArray,
                   }
                }
            ],
            OR: [
                {
                  programmingLanguages: {
                    hasSome: userProgrammingLanguages,
                  },
                },
                {
                  user: {
                    country: userCountry,
                  },
                },
              ],
        },
        include: {
            goodIdeas: true,    
            badIdeas: true,
            interests: true,
            user: true
        },
        orderBy:{
            createdAt: "desc"
        }
    })

    return NextResponse.json(relevantPosts, {status: 200})
}