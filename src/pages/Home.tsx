import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  return (


    <div className=" flex flex-col justify-start items-center min-h-screen w-screen relative">

    {/* // Hero Section */}
    <div className="wave absolute left-0 top-0" style={{filter: 'blur(80px)'}}  />


    <section className="flex flex-col justify-center items-center h-full w-full gap-5 mt-40 mb-20 mx-auto ">


        <div className="relative">
            <div className="w-[33px] h-[33px] rounded-full bg-[#A725D4] absolute -bottom-5" />
            <div className="w-[57px] h-[57px] rounded-full bg-[#A725D4] absolute -top-10 -right-5" />
        <Link
            to="https://github.com/KaiAlan/chit-chat"
            className=" inline-flex items-center rounded-full bg-[#D9D9D9] bg-opacity-5 border border-opacity-20 border-[#8e8c8c] px-3 py-1 font-sans font-extralight text-sm text-center backdrop-blur-sm"
        >
            <span className=" hidden sm:inline">Help us making it better. Contribute to the github-repo here.</span>
            <span className="sm:hidden">Contribute to the github-repo here.</span>
        </Link>
        </div>

        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] max-w-[900px] mx-3">Tired of fleeting connections and data-hungry apps?</h1>

        <span className=" inline-block max-w-[700px] text-center text-lg text-[#D9D9D9] md:leading-tight sm:text-xl px-3 py-1">Create rooms, chat, and connect in real-time. Once the room disappears, your words and data vanish too, leaving only the echo of shared moments.</span>

        <div className="flex justify-center items-center gap-5 my-5">
        <Button className="bg-[#A725D4]">Create Room</Button>
        <Button variant="outline" className=" bg-transparent">Join Room</Button>

        </div>
    </section>
    </div>

  )
}

export default Home