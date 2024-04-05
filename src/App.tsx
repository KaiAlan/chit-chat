import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen max-h-screen w-full bg-black text-white antialiased relative select-none">

      <Navbar />

      <Outlet />

      <Footer />
    </main>
  );
};

export default App;
