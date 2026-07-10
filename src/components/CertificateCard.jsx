import { motion } from "motion/react"

const CertificateCard = ({ certificate }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="flex flex-col gap-2 w-40 sm:w-70 p-3 bg-[#002fff17] rounded-xl border border-white/60"
        >
            <img src={certificate.certImage} alt="image" className="object-cover shrink-0 rounded-xl" />
            <div className="flex flex-col gap-2 items-center text-center">
                <span className="text-xs sm:text-base font-bold">{certificate.name}</span>
                <div className="mt-0.5 flex flex-col sm:flex-row gap-2">
                    <span className=" text-[11px] sm:text-sm">{certificate.platform}</span>
                    <span className="hidden sm:block sm:text-sm">|</span>
                    <span className="text-[11px] sm:text-sm" >Feb 2025 - Mar 2025</span>
                </div>
            </div>
            {/* <p className="ml-2 -mt-1.25 text-xs sm:text-sm opacity-70">{certificate.description}</p> */}
        </motion.div>
    )
}

export default CertificateCard