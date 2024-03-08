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
        profilePicture: "https://developersmeeting.com/api/pp/" + newUser.id as string
      }
    })
  
    if (typeof user.profilePicture == "string") {

        const uploadToServer = async (id: string) => {
          const res = await fetch(user.profilePicture)
          const blob = await res.blob()
          const image = new File([blob],"profilePicture.png") 
          const body = new FormData()
          body.append('fileType', "pp")
          body.append("id", id)
          body.append("profilePicture", image)
          await fetch("/api/pp", {
            method: "POST",
            body
            })
        }

        await uploadToServer(newUser.id)

        return NextResponse.json(updatedUser, {status: 201}) 
    }
    else{
        return NextResponse.json(updatedUser, {status: 201}) 
    }
  } catch (error) {
    return NextResponse.json({error}, {status: 404}) 
  }
}
