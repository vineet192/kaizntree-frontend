import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

export default function NavBar(props) {

    const { logout, currentUser } = useAuth()

    async function onLogoutClick(event) {
        await logout()
        window.location.href = "/login"
    }

    return (
        <nav className="p-2 w-full bg-blue-500 text-white flex">
            <h1 className="mr-auto text-3xl font-bold">KaiznTree</h1>
            <button className="ml-auto mr-2 font-bold" onClick={onLogoutClick}>Logout</button>
        </nav>
    )
}