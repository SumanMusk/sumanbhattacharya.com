import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_PRODUCTION === "true" 
        ? import.meta.env.VITE_API_URL 
        : `http://localhost:${import.meta.env.BACKEND_PORT}`
});

export default instance;