import React from "react"
import { prisma } from "@/auth/prisma";
import { redirect } from "next/navigation";


const Home=async ({params}:{params:{id:string}})=>{
    const redirects=await prisma.link.findFirst({
        where:({slug:params.id})
    })
    if (redirects?.url)
    redirect(redirects?.url)
    
  return(
    <div>
        {}
    </div>
  )
}

export default Home
