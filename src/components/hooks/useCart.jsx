import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`)
            return res.data;
        }

    })
    return [cart, refetch];
};

export default useCart;