import { FaBlog, FaUserShield, FaLink, FaUsers, FaListCheck } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const ProjectData = {
    ProjectDesc: "From full-stack platforms to backend services, my projects emphasize practical problem-solving, scalable architecture, and delivering reliable experiences that mirror real-world development practices. Each project represents an opportunity to solve meaningful problems through modern technologies, combining functionality, performance, and clean implementation into production-inspired solutions.",
    Projects: [
        {
            RepoName: "Blog App",
            RepoDate: "2024-12-14",
            RepoLink: "https://github.com/SumanMusk/Blog_App",
            RepoIcon: FaBlog,
            IconColor: "text-green-500",
            TechStackPoints: [
                "Node Js",
                "Express Js",
                "EJS",
                "MongoDB"
            ],
            RepoDescription: "Full-stack blogging platform featuring secure authentication, article creation and management, protected user dashboards, and MongoDB-powered content storage, enabling seamless publishing and organization of blogs."
        },

        {
            RepoName: "Authentication From Scratch",
            RepoDate: "2024-11-12",
            RepoLink: "https://github.com/SumanMusk/Authentication_from_scratch",
            RepoIcon: FaUserShield,
            TechStackPoints: [
                "Node Js",
                "Express Js",
                "EJS",
                "MongoDB"
            ],
            IconColor: "text-blue-500",
            RepoDescription: "Built a complete authentication system from scratch with secure registration, login, password hashing, authorization workflows, protected routes, and token-based access control using backend security practices."
        },

        {
            RepoName: "URL Shortening Service",
            RepoDate: "2024-07-22",
            RepoLink: "https://github.com/SumanMusk/Bitly_Clone_BackEnd",
            RepoIcon: FaLink,
            IconColor: "text-cyan-400",
            TechStackPoints: [
                "Node Js",
                "Express Js",
                "EJS",
                "MongoDB"
            ],
            RepoDescription: "Backend URL shortening service that generates unique short links, handles redirections efficiently, stores data persistently, and exposes RESTful APIs for link management and analytics."
        },

        {
            RepoName: "Employee Database",
            RepoDate: "2023-10-02",
            RepoLink: "https://github.com/SumanMusk/Employee-database-",
            RepoIcon: FaUsers,
            IconColor: "text-purple-500",
            TechStackPoints: [
                "Handlebars",
                "Express Js",
                "MySQL"
            ],
            RepoDescription: "Employee management application supporting CRUD operations, structured data validation, and MySQL integration for efficient storage, retrieval, and organization of workforce information and records."
        },

        {
            RepoName: "ToDo List",
            RepoDate: "2024-09-17",
            RepoLink: "https://github.com/SumanMusk/ToDo_List",
            RepoIcon: FaListCheck,
            IconColor: "text-yellow-400",
            TechStackPoints: [
                "React Js",
                "Bootstrap"
            ],
            RepoDescription: "Responsive task management application built with React, allowing users to create, update, complete, and organize tasks while maintaining a clean and intuitive user experience."
        },

        {
            RepoName: "LeetCode DSA Solutions",
            RepoDate: "2024-09-06",
            RepoLink: "https://github.com/SumanMusk/LeetCode_DSA_Solutions",
            RepoIcon: SiLeetcode,
            IconColor: "text-orange-500",
            TechStackPoints: [
                "Java",
                "Data Structures",
                "Algorithms"
            ],
            RepoDescription: "Comprehensive collection of LeetCode solutions in Java showcasing proficiency in data structures, algorithms, optimization techniques, and diverse problem-solving patterns across difficulty levels."
        }
    ]
}

export default ProjectData;