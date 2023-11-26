import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:4321'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;