import { useState } from "react"
import { useRouter } from "next/navigation"
import { jwtVerify } from "jose"


const useAuth = () => {
    const [loginUserEmail,setLoginUserEmail] = useState("")
    const router = useRouter()
    const token = localStorage.getItem("token")
    if(!token){
        router.push("/user/login")
    }
    try {
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = jwVerify(token,secretKey)
        setLoginUserEmail(decodedJwt.payload.email)
    }catch{
        router.push("/user/login")
    }
}
export default useAuth