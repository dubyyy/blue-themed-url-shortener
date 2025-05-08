import {auth} from './auth'
export const getCurrentUser=async()=>{
    try{
        const session=await auth()
        return session?.user
    }catch(err){
        console.error('This is the error', err);
}
}