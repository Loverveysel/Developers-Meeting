import { NextRequest, NextResponse } from 'next/server';
import path from 'path'
import * as fs from 'fs'

export function GET(req: NextRequest, context: any) {  
    const { params } = context 
    let filename: string = params.id + "-pp.png"
    const filePath = path.join(__dirname, '../../../../../../../files/pp', filename)
    
    const imageBuffer = fs.readFileSync(path.join(filePath))
    
    if (imageBuffer) {
        return new NextResponse(imageBuffer, {
            headers: {
                "Content-Type": "image/png"
            },
            status: 200
        })
    }else{
        return NextResponse.json({error: "File does not found"}, {status: 401})
    }
}