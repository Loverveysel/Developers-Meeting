import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { checkAuthA } from "@/lib/checkAuth"
import { findUser } from "@/lib/findUser"

export async function GET(req: NextRequest, res: NextResponse){
    try {  
      const session = await checkAuthA(req, res)
      
      const user = await findUser(session)
      
      if (user) {
        const userProgrammingLanguages = user?.programmingLanguages
        const userDomains = user?.domains
        const userCountry = user?.country
    
        const relevantPosts = await prisma.post.findMany({
            where: {
              user: {
                country: userCountry
              },
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
      }else{
        const allPosts = await prisma.post.findMany({
          where:{
            
          },
          orderBy:{
            createdAt: "desc"
          },
          select: {
            id: true,
          }
        })

        return NextResponse.json(allPosts, {status: 200})
      }
      
    } catch (error) {
      console.log(error);
      
      return NextResponse.json({error}, {status: 400})
    }
}
