import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll"; // Smooth scrolling for menu items
import { Main } from "./components/Molecules";
import "./App.css";


function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for adding shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* ✅ HEADER NAVIGATION */}
      <header
        className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "shadow-lg bg-[#040b14] bg-opacity-95" : "bg-[#040b14] bg-opacity-80"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide text-[#149ddd] hover:text-white transition duration-300">
            Shan Gabol
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {["Home", "About","Facts", "Skills", "Resume","Projects", "Services", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  className="hover:text-[#149ddd] transition-all duration-300 cursor-pointer relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#149ddd] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl focus:outline-none" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#040b14] text-white flex flex-col items-center justify-center transform ${
            navOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } transition-all duration-500 ease-in-out md:hidden`}
        >
          {["Home", "About", "Projects", "Facts", "Skills", "Resume", "Portfolio", "Services", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                onClick={() => setNavOpen(false)}
                className="text-xl my-3 hover:text-[#149ddd] transition-all duration-300 cursor-pointer"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-20"> {/* Added margin-top to prevent overlap */}
        <Main />
      </main>
    </div>
  );
}

export default App;
