
export const useStagger = () => ({
    staggerContainer: {
        variants: {
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
        },
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 },
    },
    staggerItem: {
        variants: {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        },
    },
    subHeadingStaggerItem: {
        variants: {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 0.5, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        },
    },
});