import CertificateCard from "./CertificateCard"
import Certificates from "../../Services/CertificatesData"
import { useStagger } from "../../Hooks/useStagger"
import { motion } from "motion/react"

const CertificattionSection = () => {

    const { staggerContainer, staggerItem, subHeadingStaggerItem } = useStagger();

    return (
        <>
            <div id="certifications" className="mt-20 mx-10 sm:mx-40">
                <motion.div className="flex flex-col select-none" {...staggerContainer}>
                    <motion.span className="self-center opacity-50" {...subHeadingStaggerItem}>My Certificates</motion.span>
                    <motion.span className="self-center mt-2 text-5xl font-bold" {...staggerItem}>Certifications</motion.span>
                </motion.div>
            </div>
            <div className="lg:mx-30 mt-15 flex flex-wrap justify-center gap-4">
                {Certificates.map((certificate, i) => (
                    <CertificateCard key={i} certificate={certificate} />
                ))}
            </div>
        </>
    )
}

export default CertificattionSection