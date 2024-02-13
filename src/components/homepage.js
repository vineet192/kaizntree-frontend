import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "./navbar";

export default function HomePage(props) {

    const { currentUser } = useAuth()

    useEffect(() => {
        if (!currentUser) {
            window.location.href = "/login"
        }

        console.log(currentUser.getIdToken(true).then(token => { 
            console.log("COPY YOUR AUTH TOKEN")
            console.log(`%c ${token}`, "font-weight: bold; color: green; font-size:15px;") 
            
        }))
    }, [])

    return (<>
        <NavBar />
        <div className="flex p-4 mt-[5%] border-2 border-blue-500 mx-5">
            <button className="mr-auto bg-blue-500 text-white p-2 text-xl rounded font-bold">New Item</button>
            <div className="flex ml-auto items-center">
                <input className="border-b border-blue-500 mx-2 h-fit" placeholder="Search"></input>
                <div className="flex flex-col">
                    <button className="bg-blue-500 text-white p-2 text-xl rounded font-bold">Filter</button>
                </div>
            </div>
        </div>
    </>)
}