import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiC, SiTypescript, SiMysql, SiMongodb, SiExpress, SiDotnet, SiPostgresql, SiDevbox } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";


const SkillsData = {
    SkillDesc: "Through learning and applying multiple programming languages, modern frameworks, and relational database technologies, my skill set enables me to develop a versatile approach to building reliable, maintainable, and high-performance software solutions.",
    techSkills: [
        {
            skillCategoryName: "Languages",
            skillsArray: [
                { name: "C", icon: SiC, textColor: "text-blue-500" },
                { name: "Java", icon: FaJava, textColor: "text-orange-500" },
                { name: "Python", icon: FaPython, textColor: "text-blue-600" },
                { name: "JavaScript", icon: FaJs, textColor: "text-yellow-300" },
                { name: "TypeScript", icon: SiTypescript, textColor: "text-blue-500" },
                { name: "SQL", icon: PiFileSql, textColor: "text-sky-400" }
            ]
        },
        {
            skillCategoryName: "Frameworks",
            skillsArray: [
                { name: "Node.js", icon: FaNodeJs, textColor: "text-green-500" },
                { name: "Express Js", icon: SiExpress, textColor: "text-gray-300" },
                { name: "ASP.NET", icon: SiDotnet, textColor: "text-violet-500" },
                { name: "VB.NET", icon: SiDevbox, textColor: "text-indigo-500" },
                { name: "React Js", icon: FaReact, textColor: "text-cyan-400" },
                { name: "Angular Js", icon: FaAngular, textColor: "text-red-600" }
            ]
        },
        {
            skillCategoryName: "Databases",
            skillsArray: [
                { name: "MySQL", icon: SiMysql, textColor: "text-blue-600" },
                { name: "SQL SSMS", icon: DiMsqlServer, textColor: "text-red-500" },
                { name: "MongoDB", icon: SiMongodb, textColor: "text-green-500" },
                { name: "PostgreSQL", icon: SiPostgresql, textColor: "text-sky-500" }
            ]
        }
    ]
}


export default SkillsData;
