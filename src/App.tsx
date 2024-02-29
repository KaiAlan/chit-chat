import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full bg-[#15161D] text-white antialiased">

      <Navbar />

      <Outlet />

      <Footer />
    </main>
  );
};

export default App;
