import { SlArrowDown, SlPaperPlane } from "react-icons/sl";
import { motion } from "motion/react";
import { useState, useEffect } from "react"
import "../App.css";

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [DropdownDefaultValue, setDropdownDefaultValue] = useState("Home");
  const [isBarFixed, setIsBarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBarFixed(window.scrollY >= 16); // mt-4 = 16px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (!element)
      return;

    const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    if(sectionId !== "contactme")
      setDropdownDefaultValue(sectionId);

    window.scrollTo({ top, behavior: "smooth" });

    setIsDropdownOpen(false);
  };

  return (
    <nav className={`z-1 w-full px-4 py-4 transition-all duration-300 ${isBarFixed ? "fixed mt-0" : "absolute mt-4"}`}>
      <div className="mx-auto flex max-w-6xl bg-white/10 backdrop-blur-[2px] items-center justify-between rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.12)] px-4 py-1.5">

        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full"
            onClick={() => { scrollToSection("Home") }}
          >
            <img
              src="/UserLogo.png"
              alt="image"
              className="h-11 w-12 object-fir rounded-full pointer-events-none select-none"
            />
          </div>

          <h1 className="hidden text-xl font-medium md:block">
            Suman Bhattacharya
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative inline-block">
            <div
              className="appearance-none rounded-full bg-[#2b1f54a9] px-5 py-2 pr-2 text-xs sm:text-sm w-31.5 sm:w-35 hover:cursor-pointer"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {DropdownDefaultValue}
              <div className={`absolute left-0 top-full mt-1 w-full rounded-lg bg-[#2b1f54fa] py-2 text-xs sm:text-sm text-center ${isDropdownOpen ? "block" : "hidden"}`}>
                <div className="my-2 cursor-pointer hover:opacity-80" onClick={(e) => { e.stopPropagation(); scrollToSection("Home"); }}>Home</div>
                <div className="my-2 cursor-pointer hover:opacity-80" onClick={(e) => { e.stopPropagation(); scrollToSection("About"); }}>About</div>
                <div className="my-2 cursor-pointer hover:opacity-80" onClick={(e) => { e.stopPropagation(); scrollToSection("Skills"); }}>Skills</div>
                <div className="my-2 cursor-pointer hover:opacity-80" onClick={(e) => { e.stopPropagation(); scrollToSection("Projects"); }}>Projects</div>
                <div className="my-2 cursor-pointer hover:opacity-80" onClick={(e) => { e.stopPropagation(); scrollToSection("Experience"); }}>Experience</div>
                <div className="my-2 cursor-pointer hover:opacity-80" onClick={(e) => { e.stopPropagation(); scrollToSection("Certifications"); }}>Certifications</div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
            >
              <SlArrowDown
                className="text-sm"
              />
            </motion.div>
          </div>
          <button
            className="transition hover:opacity-80 btn-primary flex items-center gap-2 px-3 py-2 rounded-[2vw] font-bold text-xs sm:text-sm"
            onClick={() => scrollToSection("contactme")}
          >
            Reach Out
            <span><SlPaperPlane /></span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar