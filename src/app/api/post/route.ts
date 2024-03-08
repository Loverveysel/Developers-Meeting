import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: NextRequest, res: NextResponse) {
    try {
      const newPost = await req.json()
    
      const post = await prisma.post.create({
        data: newPost,
      })

      const user = await prisma.user.findUnique({
        where: {
          id: post.userId
        },
        include: {
          posts: true
        },
      })

      const chatGroup = await prisma.chatGroup.create({
        data: {
          name: post.title,
          members: {
            create: {
              user: {
                connect: {
                  id: user?.id
                }
              }
            }
          },
          post: {
            connect: {
              id: post.id
            }
          }
        }
      })

      if (user) {
        const updatedUser = await prisma.user.update({
          where: {
            id: post.userId
          },
          data: {
            posts: {
              connect: {
                id: post.id
              }
            }
          }
        })
      }

      return NextResponse.json(post, {status: 201})
    } catch (error) {
      console.log(error)
      
      return NextResponse.json({error}, {status: 404})
    }
}