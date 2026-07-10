import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

gsap.registerPlugin(MotionPathPlugin);

const OrbitBg = () => {
    useEffect(() => {
        const animations = [
            { selector: ".react-logo", path: "#orbit1", duration: 18, start: 0.1 },
            { selector: ".mongo-logo", path: "#orbit3", duration: 22, start: 0.3 },
            { selector: ".tailwind-logo", path: "#orbit2", duration: 28, start: 0.5 },
            { selector: ".express-logo", path: "#orbit4", duration: 32, start: 0.4 },
        ];

        animations.forEach((item) => {
            gsap.to(item.selector, {
                duration: item.duration,
                repeat: -1,
                ease: "none",
                motionPath: {
                    path: item.path,
                    align: item.path,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: false,
                    start: item.start || 0,
                    end: 1,
                },
            });
        });

        return () => {
            gsap.killTweensOf([
                ".react-logo",
                ".mongo-logo",
                ".tailwind-logo",
                ".express-logo",
            ]);
        };
    }, []);

    return (
        <div className="hidden sm:block absolute top-0 right-0 w-[60%] h-screen overflow-hidden pointer-events-none select-none">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1400 900"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <path id="orbit1" d="M1400 80 A900 900 0 0 0 500 900" fill="none" stroke="url(#orbitGradient)" strokeWidth="2" opacity="0.35" />
                <path id="orbit2" d="M1400 180 A760 760 0 0 0 640 900" fill="none" stroke="url(#orbitGradient)" strokeWidth="2" opacity="0.30" />
                <path id="orbit3" d="M1400 320 A600 600 0 0 0 800 900" fill="none" stroke="url(#orbitGradient)" strokeWidth="2" opacity="0.25" />
                <path id="orbit4" d="M1400 500 A400 400 0 0 0 1000 900" fill="none" stroke="url(#orbitGradient)" strokeWidth="2" opacity="0.20" />

                <foreignObject className="react-logo" x="0" y="0" width="60" height="60">
                    <FaReact size={60} color="#22d3ee" />
                </foreignObject>

                <foreignObject className="mongo-logo" x="0" y="0" width="60" height="60">
                    <SiMongodb size={60} color="#4ade80" />
                </foreignObject>

                <foreignObject className="tailwind-logo" x="0" y="0" width="60" height="60">
                    <SiTailwindcss size={60} color="#38bdf8" />
                </foreignObject>

                <foreignObject className="express-logo" x="0" y="0" width="60" height="60">
                    <SiExpress size={60} color="#d1d5db" />
                </foreignObject>
            </svg>
        </div>
    );
};

export default OrbitBg;