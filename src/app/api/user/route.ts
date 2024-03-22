import { checkAuthA } from "@/lib/checkAuth"
import { findUser } from "@/lib/findUser"
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await checkAuthA(req, res)

        const user = await findUser(session)
        if (user) {
            return NextResponse.json(user, {status: 200})
        }else{
            return NextResponse.json({error: "User not found"}, {status: 400})
        }
    } catch (error) {
        return NextResponse.json({error}, {status: 400})
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const user = body.user
    console.log(user)

    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        country: user.country,
        educationExperience: user.educationExperience,
        firstName: user.firstName,
        domains: user.domains,
        programmingLanguages: user.programmingLanguages,
        secondName: user.secondName,
        biography: user.biography,
        
      }
    })

    const updatedUser = await prisma.user.update({
      where: {
        id: newUser.id
      },
      data: {
        profilePicture: "/api/pp/" + newUser.id as string
      }
    })
    
    return NextResponse.json(updatedUser, {status: 201}) 
    
  } catch (error) {
    console.log(error)
    
    return NextResponse.json({error}, {status: 404}) 
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const session = await checkAuthA(req, res)
        const user = await findUser(session)
        const body = await req.json()
        const updatedUser = await prisma.user.update({
            where: {
                id: user ? user.id : ""
            },
            data: {
                educationExperience: body.educationExperience,
                domains: body.domains,
                programmingLanguages: body.programmingLanguages,
                biography: body.biography,
            }
        })
        return NextResponse.json(updatedUser, {status: 200})
    } catch (error) {
        return NextResponse.json({error}, {status: 400})
    }
}
