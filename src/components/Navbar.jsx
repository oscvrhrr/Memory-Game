import Scoreboard from "./Scoreboard"


export default function Navbar () {
    return (
        <nav className="absolute top-0 h-20 w-screen bg-green-300 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">MemoCup</h1>
            <Scoreboard/>
        </nav>
    )
}