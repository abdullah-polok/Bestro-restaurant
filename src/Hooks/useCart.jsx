import {
    useQuery,
} from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure'
const useCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    ////load data using tan stack query
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }

    })
    return [carts, refetch]

};

export default useCart;