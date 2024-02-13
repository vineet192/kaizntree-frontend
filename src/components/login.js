import { useEffect, useRef, useState } from "react"
import { useAuth } from "../context/AuthContext"
import NavBar from "./navbar"

export default function Login(props) {

    const { login, currentUser } = useAuth()
    const passwordRef = useRef()
    const emailRef = useRef()

    const [isLoading, setIsLoading] = useState(false)

    async function onLoginCLick(event) {
        setIsLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        setIsLoading(false)
        window.location.href = "/"
    }

    useEffect(() => {
        if (currentUser) {
            window.location.href = "/"
        }
    }, [])

    return (
        <>
            <NavBar/>
            <div className="shadow-md p-2 border-2 border-blue-500 fixed top-1/2 left-1/2 
        translate-x-[-50%] translate-y-[-50%] flex flex-col">
                <h1 className="mx-auto text-3xl font-bold">LOGIN</h1>
                <input ref={emailRef} className="text-2xl mx-auto p-2" placeholder="email"></input>
                <input ref={passwordRef} className="text-2xl mx-auto p-2" placeholder="password" type="password"></input>


                {isLoading ?
                    <button className="p-2 mx-auto text-2xl bg-blue-500 text-white font-bold animate-pulse" disabled>Logging in</button> :
                    <button className="p-2 mx-auto text-2xl bg-blue-500 text-white font-bold" onClick={onLoginCLick}>Login</button>
                }
            </div>
        </>

    )
}