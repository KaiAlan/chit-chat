import { Link } from "react-router-dom";
import "./Home.scss";
import JoinRoomDialog from "@/components/JoinRoomDialog";
import heroBg from "@/assets/hero-bg.png";

const Home = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen w-screen relative bg-black bg-no-repeat bg-cover bg-center overflow-hidden`}
    >
      {/* // Hero Section */}

      <img src={heroBg} alt="hero-bg" className="absolute min-w-[500px]" />

      <div className="w-[500px] h-[500px] bg-fuchsia-600 absolute rounded-full -bottom-72 blur-[250px] bg-opacity-80" />

      <section className="flex flex-col justify-center items-center h-full w-full gap-8 mx-auto z-10">
        <div className="relative">
          <div className="w-[33px] h-[33px] rounded-full bg-fuchsia-600 absolute -bottom-5" />
          <div className="w-[57px] h-[57px] rounded-full bg-fuchsia-600 absolute -top-10 -right-5" />
          <Link
            to="https://github.com/KaiAlan/chit-chat"
            className=" inline-flex items-center rounded-full bg-[#D9D9D9] bg-opacity-5 border border-opacity-20 border-[#8e8c8c] px-3 py-1 font-sans font-extralight text-sm text-center backdrop-blur-sm"
          >
            <span className=" hidden sm:inline">
              Help us making it better. Contribute to the github-repo here.
            </span>
            <span className="sm:hidden">
              Contribute to the github-repo here.
            </span>
          </Link>
        </div>

        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] max-w-[1100px] mx-3">
          Tired of fleeting connections and data-hungry apps?
        </h1>

        <span className=" inline-block max-w-[700px] font-light text-center text-base text-[#D9D9D9] md:leading-tight sm:text-xl px-3 py-1">
          Create rooms, chat, and connect in real-time. Once the room
          disappears, your words and data vanish too, leaving only the echo of
          shared moments.
        </span>

        <div className="flex justify-center items-center gap-5 my-5">
          <JoinRoomDialog isUserjoining={false}>Create Room</JoinRoomDialog>
          <JoinRoomDialog isUserjoining={true}>Join Room</JoinRoomDialog>
        </div>
      </section>
    </div>
  );
};

export default Home;
