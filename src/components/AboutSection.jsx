import { motion } from "motion/react";
import AboutCard from "./AboutCard";
import AboutData from "../../Services/AboutData";
import { useStagger } from "../../Hooks/useStagger";

const cardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {

    const { staggerContainer, staggerItem } = useStagger();

    return (
        <>
            <motion.div
                id="about"
                className="mt-40 sm:mt-20 mx-10 sm:mx-40"
                {...staggerContainer}
            >
                <motion.div {...staggerItem} className="flex flex-col select-none">
                    <span className="opacity-50">Introduction</span>
                    <span className="my-2 text-5xl font-bold">About Me</span>
                    {AboutData.AboutDesc.split("\n").map((para, i) => (
                        <span className="mt-3" key={i}>{para}</span>
                    ))}
                </motion.div>
            </motion.div >
            <motion.div {...staggerItem} className="flex flex-row justify-center items-center mt-9">
                <motion.div
                    className="flex flex-wrap justify-center gap-5 p-5"
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {AboutData.GeneralSkills.map((skill, i) => (
                        <AboutCard key={i} variants={cardVariants} CardLogo={skill.SkillLogo} LogoColor={skill.LogoColor} Description={skill.SkillDescription} />
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}

export default AboutSection