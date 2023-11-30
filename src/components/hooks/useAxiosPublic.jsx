import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://swiftscan-diagnostics-server-7xwefv715-md-sifat-ikrams-projects.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;