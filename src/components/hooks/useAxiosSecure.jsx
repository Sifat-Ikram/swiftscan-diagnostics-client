import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const axiosSecure = axios.create({
    baseURL: 'https://swiftscan-diagnostics-server-7xwefv715-md-sifat-ikrams-projects.vercel.app'
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request intercepted by interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response){
        return response;
    },  async(error)=> {
       const status = error.response.status;
       if (status === 401 || status === 403) {
            await logOut();
           navigate('/signIn');
       }
    //    console.log('status error by interceptors', status);
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;