import { NextRequest, NextResponse } from "next/server"
import { writeFileSync, mkdirSync, existsSync } from "fs"
import path from "path"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.formData()
    const blob: Blob | null = body.get("profilePicture") as unknown as Blob
    const id: string = body.get("id") as string
    const file = new File([blob], id + "-pp.png")

    console.log("id : " , id)
    

    if (!file) {
      return NextResponse.json({ success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const directoryPath = "../files/pp"
    if (!existsSync(directoryPath)) {
      mkdirSync(directoryPath, { recursive: true }) // Create nested directories if needed
    }

    const filePath = path.join(directoryPath, id + "-pp.png") // Use path.join for reliable paths
    writeFileSync(filePath, buffer)

    console.log(`Uploaded file saved to: ${filePath}`)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ success: false, error }) // Provide meaningful error message
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const blob: Blob | null = body.get("profilePicture") as unknown as Blob
    const id: string = body.get("id") as string
    const file = new File([blob], id + "-pp.png")

    console.log("id : " , id)
    

    if (!file) {
      return NextResponse.json({ success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const directoryPath = "../files/pp"
    if (!existsSync(directoryPath)) {
      mkdirSync(directoryPath, { recursive: true }) // Create nested directories if needed
    }
    
    const filePath = path.join(directoryPath, id + "-pp.png") // Use path.join for reliable paths
    writeFileSync(filePath, buffer)

    console.log(`Uploaded file saved to: ${filePath}`)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.log(error)

    return NextResponse.json({ error }, { status: 404 })
  }
  
}