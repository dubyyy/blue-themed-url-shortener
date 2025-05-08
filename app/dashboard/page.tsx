import { getCurrentUser } from "@/auth/session";
import { redirect } from "next/navigation";
import Dashboard from "../components/dashboard";
import { prisma } from "@/auth/prisma";

const Home =async()=>{
    
    const user=await getCurrentUser()
    if(!user){
        redirect('/api/auth/signin')
    }
    const id=await user?.id
    const history= await prisma.link.findMany({
        where:{userId:id}
    })
    return(
       <Dashboard userEmail={user?.id ?? ''} />
    )
}
export default Home