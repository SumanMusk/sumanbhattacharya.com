import { motion } from "motion/react"

const variantStyles = {
    success: "bg-green-600",
    error: "bg-red-900",
    waiting: "bg-amber-500"
}

const ToastMszBox = ({ show, message = "Default Message", variant = "success" }) => {

    return (
        <>
            {show &&
                <div className="fixed flex justify-center items-center top-20 left-0 w-full h-20 z-10">
                    <motion.div
                        className={`flex px-8 sm:px-10 py-3 sm:py-4 rounded-4xl font-bold ${variantStyles[variant]}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {message}
                    </motion.div>
                </div>
            }
        </>
    )
}

export default ToastMszBox