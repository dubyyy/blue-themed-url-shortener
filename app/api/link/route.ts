import { prisma } from "@/auth/prisma";
import { getCurrentUser } from "@/auth/session";
import { NextResponse } from "next/server";

export async function GET() {
    const user=await getCurrentUser();
    const id=await user?.id
    const link= await prisma.link.findFirst({
        where:{userId:id},
        orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(link)
  }