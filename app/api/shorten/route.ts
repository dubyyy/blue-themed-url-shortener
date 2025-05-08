import { prisma } from "@/auth/prisma";
import { getCurrentUser } from "@/auth/session";
import { NextResponse } from "next/server";


 function generateSlug():string {
    const characters="1ry3zaw9m8cv047bt6qhfgpn2ujiesl"
    const length=6;
    let slug = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      slug += characters[randomIndex];
    }
    return slug;
  }

  export async function GET() {
    const user=await getCurrentUser();
    const id=await user?.id
    const history= await prisma.link.findMany({
        where:{userId:id}
    })
    return NextResponse.json(history)
  }

export async function POST(req:Request){
    const {url,email}=await req.json();
    const newLink =await prisma.link.create({
        data:{
            slug:generateSlug(),
            url:url,
            userId:email,
        }

        })

    return new Response(JSON.stringify({ message: "Done..." }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

