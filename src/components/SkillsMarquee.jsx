import { motion } from "motion/react";

const SkillsMarquee = ({ staggerItem, MarqueeHeader, MarqueeWidth, isMarqueeReverse, SkillsArr }) => {

    return (
        <>
            <motion.div {...staggerItem} className="text-3xl font-bold mt-10 ml-2 sm:ml-7">{MarqueeHeader}</motion.div>
            <div className="flex flex-row justify-center mt-5 sm:mt-8">
                <div
                    className={`overflow-hidden flex flex-row ${MarqueeWidth}`}
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                    }}
                >
                    <motion.div
                        animate={{
                            x: isMarqueeReverse ? ["-50%", "0%"] : ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="flex gap-4 w-max p-5"
                    >
                        {[...SkillsArr, ...SkillsArr].map((skill, i) => {
                            const SkillIcon = skill.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col justify-center items-center h-22 w-30 shrink-0"
                                >
                                    <SkillIcon size={60} className={skill.textColor} />
                                    <span className="mt-2 text-sm">{skill.name}</span>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default SkillsMarquee