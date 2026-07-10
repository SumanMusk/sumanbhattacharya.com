import { motion } from "motion/react"

const TagCard = ({ Name, BGColor, isHover }) => {
    return (
        <motion.div
            whileHover={ isHover && { scale: 1.05 }}
            transition={{ duration: 0.2, ease: "linear" }}
            style={{ backgroundColor: BGColor }}
            className={`h-7 px-2.5 rounded-[15px] flex justify-center items-center text-xs font-bold border border-white/60`}
        >
            {Name}
        </motion.div>
    )
}

export default TagCard