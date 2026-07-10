import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react";
import { useStagger } from "../../Hooks/useStagger"
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "../../Services/ExperienceData";

const ExperienceSection = () => {

    const [current, setCurrent] = useState(0);
    const [isCardPaused, setIsCardPaused] = useState(false);
    const { staggerContainer, staggerItem, subHeadingStaggerItem } = useStagger();

    const next = () => { setCurrent((prev) => (prev + 1) % ExperienceData.Experiences.length); };

    const variants = {
        enter: { x: 100, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 }
    };

    useEffect(() => {
        if (isCardPaused)
            return;
        const timer = setInterval(() => next(), 5000);
        return () => clearInterval(timer);
    }, [current, isCardPaused]);

    return (
        <>
            <div id="experience" className="mt-30 mx-10 sm:mx-40">
                <motion.div className="flex flex-col select-none" {...staggerContainer}>
                    <motion.span className="opacity-50" {...subHeadingStaggerItem}>My Contributions</motion.span>
                    <motion.span className="mt-2 text-5xl font-bold" {...staggerItem}>Experience</motion.span>
                    <motion.span className="mt-3" {...staggerItem}>{ExperienceData.ExperienceDesc}</motion.span>
                </motion.div>
            </div>
            <div 
                className="mt-8 sm:mt-10 py-4 flex flex-row justify-center items-center overflow-x-hidden"
                onMouseEnter={() => setIsCardPaused(true)}
                onMouseLeave={() => setIsCardPaused(false)}
                onTouchStart={() => setIsCardPaused(true)}
                onTouchEnd={() => setIsCardPaused(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex flex-row"
                        whileHover={{ scale: isCardPaused ? 1.02 : 1 }}
                        whileTap={{ scale: isCardPaused ? 1.01 : 1 }}
                        transition={{ duration: 0.2, ease: "easeInOut"}}
                    >
                        <ExperienceCard
                            experience={ExperienceData.Experiences[current]} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default ExperienceSection