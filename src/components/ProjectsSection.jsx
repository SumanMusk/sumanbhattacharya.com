import { motion } from "motion/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useStagger } from "../../Hooks/useStagger";
import TagCard from "./TagCard";
import ProjectData from "../../Services/ProjectsData"


const ProjectsSection = () => {

    const { staggerContainer, staggerItem, subHeadingStaggerItem } = useStagger();

    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = date.getDate();

        const suffix = (day % 10 === 1 && day !== 11) ? "st"
                        : (day % 10 === 2 && day !== 12) ? "nd"
                        : (day % 10 === 3 && day !== 13) ? "rd"
                        : "th";

        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();

        return `${day}${suffix} ${month}, ${year}`;
    }

    return (
        <div id="projects" className="mx-10 sm:mx-40">
            <motion.div className="flex flex-col select-none" {...staggerContainer}>
                <motion.span {...subHeadingStaggerItem}>My Work</motion.span>
                <motion.span className="mt-2 text-5xl font-bold" {...staggerItem}>Projects</motion.span>
                <motion.p className="mt-3" {...staggerItem}>{ProjectData.ProjectDesc}</motion.p>
                <div className="mt-30 overflow-hidden">
                    <VerticalTimeline>
                        {ProjectData.Projects.map((project, i) => {
                            const Icon = project.RepoIcon;
                            return (
                                <VerticalTimelineElement
                                    key={i}
                                    className="vertical-timeline-element"
                                    contentStyle={{ background: '#6c5ce7c0', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #6c5ce7c0' }}
                                    date={formatDate(project.RepoDate)}
                                    iconStyle={{ background: '#2d4f1e', color: '#fff' }}
                                    icon={<Icon size={50} className={project.IconColor} />}
                                >
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.TechStackPoints.map((tech, i) => (
                                            <TagCard key={i} Name={tech} BGColor="#6c5ce7" isHover={true} />
                                        ))}
                                    </div>
                                    <span className="text-2xl font-bold">{project.RepoName}</span>
                                    <br />
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className="ml-1.5 flex items-center h-10 w-25"
                                    >
                                        <motion.a
                                            href={project.RepoLink}
                                            className="text-[#55E6C1]"
                                        >
                                            GitHub Link
                                        </motion.a>
                                    </motion.div>
                                    <div className="text-[14px]">{project.RepoDescription}</div>
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>                                  
                </div>
            </motion.div>
        </div >
    )
}

export default ProjectsSection