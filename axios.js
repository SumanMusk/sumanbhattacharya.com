import axios from "axios";

const instance = axios.create({
    baseURL: `${import.meta.env.baseURL}`
});

export default instance;