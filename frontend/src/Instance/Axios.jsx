import axios from "axios";

export const axiosUserInstance = axios.create({
    baseURL: "http://localhost:5050/user"
})

export const axiosExpertInstance = axios.create({
    baseURL: "http://localhost:5050/expert"
})

export const axiosAdminInstance = axios.create({
    baseURL: "http://localhost:5050/admin"
})