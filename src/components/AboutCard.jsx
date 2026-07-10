import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";

const AboutCard = ({ variants, CardLogo, LogoColor, Description }) => {

    return (
        <Tilt>
            <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                className="h-30 w-30 sm:h-50 sm:w-50 p-0.5 rounded-lg bg-gradient-to-b from-green-200 to-pink-300"
            >
                <div className="h-29 w-29 sm:h-49 sm:w-49 p-4 bg-[#1E1B29] rounded-lg shadow-lg shrink-0 flex flex-col gap-3.5 justify-center items-center">
                    <CardLogo className={`${LogoColor} w-15 sm:w-20 h-15 sm:h-20`}/>
                    <p className="text-[11px] sm:text-base text-center font-bold">{Description}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default AboutCard