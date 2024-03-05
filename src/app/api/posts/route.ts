import prisma from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"
import { checkAuthA } from "@/lib/checkAuth"
import { findUser } from "@/lib/findUser"

export async function GET(req: NextRequest, res: NextResponse){
    try {  
      const session = await checkAuthA(req, res)
      
      const user = await findUser(session)
      
      const userProgrammingLanguages = user?.programmingLanguages
      const userDomains = user?.domains
      const userCountry = user?.country
   
      const relevantPosts = await prisma.post.findMany({
          where: {
            OR: [
              {
                programmingLanguages: {
                  hasSome: userProgrammingLanguages,
                },
              },
              {
                domains: {
                  hasSome: userDomains,
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
    } catch (error) {
      console.log(error);
      
      return NextResponse.json({error}, {status: 400})
    }
}