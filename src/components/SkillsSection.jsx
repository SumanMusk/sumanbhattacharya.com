import SkillsData  from "../../Services/SkillsData";
import SkillsMarquee from "./SkillsMarquee";
import { useStagger } from "../../Hooks/useStagger";
import { motion } from "motion/react";

const SkillsSection = () => {

    const { staggerContainer, staggerItem } = useStagger();

    return (
        <div id="skills" className="mx-10 sm:mx-40">
            <motion.div className="flex flex-col select-none" {...staggerContainer}>
                <motion.span className="mt-2 text-5xl font-bold" {...staggerItem}>Skills</motion.span>
                <motion.span className="mt-3" {...staggerItem}>{SkillsData.SkillDesc}</motion.span>
                {SkillsData.techSkills.map((skill, i) => (
                    <SkillsMarquee 
                        key={i} 
                        staggerItem={staggerItem} 
                        MarqueeHeader={skill.skillCategoryName} 
                        MarqueeWidth={skill.skillsArray.length <= 5 ? "w-lg" : "w-3xl"} 
                        isMarqueeReverse={ i%2 === 0 } 
                        SkillsArr={skill.skillsArray} 
                    /> 
                ))}
            </motion.div>
        </div >
    )
}

export default SkillsSection