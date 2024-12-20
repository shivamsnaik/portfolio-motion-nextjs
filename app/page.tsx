import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          className=""
          navItems={[
            {name: 'Home', link:'/', icon: <FaHome/>}
          ]}
        />
        <Hero />
        <Grid />
        <Experience/>
        <Footer/>
      </div>
    </main>
  );
}
