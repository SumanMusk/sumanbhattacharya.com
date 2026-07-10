import { motion } from "motion/react"
import { ReactTyped } from "react-typed";
import OrbitBg from "./OrbitBg"
import BaseData from "../../Services/LandingPageData"

const HeroSection = () => {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const fromLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fromRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div id="home" className="relative w-full h-screen select-none pointer-events-none">
            <img className="absolute inset-0 object-cover w-full h-full" src="/herobg.png" alt="bg-image" />
            <OrbitBg />
            <div className="absolute inset-0 top-35 sm:top-[140px] max-w-6xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
                <div className="sm:-ml-5 mt-5 flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-violet-500" />
                    <div className="w-1 h-40 sm:h-80 bg-gradient-to-b from-violet-500 to-transparent" />
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="select-none"
                >
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-white text-5xl sm:text-6xl font-bold">
                        <motion.span
                            variants={fromLeft}
                        >
                            Hi, I'm
                        </motion.span>                        
                        <motion.span
                            variants={fromRight}
                            className="text-[#4da6ff]"
                        >
                            {BaseData.firstName}
                        </motion.span>
                    </div>

                    <motion.h2
                        variants={fadeIn}
                        className="mt-4 text-xl sm:text-3xl font-semibold text-white"
                    >
                        <ReactTyped
                            backSpeed={50}
                            onBegin={function noRefCheck() { }}
                            onComplete={function noRefCheck() { }}
                            onDestroy={function noRefCheck() { }}
                            onLastStringBackspaced={function noRefCheck() { }}
                            onReset={function noRefCheck() { }}
                            onStart={function noRefCheck() { }}
                            onStop={function noRefCheck() { }}
                            onStringTyped={function noRefCheck() { }}
                            onTypingPaused={function noRefCheck() { }}
                            onTypingResumed={function noRefCheck() { }}
                            strings={BaseData.shortDescTypeArr}
                            typeSpeed={50}
                            typedRef={function noRefCheck() { }}
                            loop
                        />
                    </motion.h2>

                    <motion.p
                        variants={fromLeft}
                        className="mt-6 text-slate-300 text-md sm:text-xl max-w-2xl leading-relaxed"
                    >
                        {BaseData.longDesc}
                    </motion.p>
                    <motion.div
                        variants={fromLeft}
                        className="mt-10 flex flex-row gap-4"
                    >
                        {BaseData.socialHandles.map((handle, i) => {
                            const Icon = handle.handleIcon;
                            return (
                                <a key={i} href={handle.url} target="_blank" className="no-underline pointer-events-auto" rel="noopener noreferrer">
                                    <Icon size={35} style={{ color: handle.logoColor }} />
                                </a>
                            )
                        })}
                    </motion.div>
                    <motion.div
                        variants={fromLeft}
                        className="flex gap-1.5 mt-4 text-[17px]"
                    >
                        <div>Get my</div>
                        <motion.a
                            href="/Resume.pdf"
                            download="Suman_Bhattacharya_Resume.pdf"
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2, ease: "linear" }}
                            className="text-blue-500 pointer-events-auto hover:cursor-pointer font-bold"
                        >
                            Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection