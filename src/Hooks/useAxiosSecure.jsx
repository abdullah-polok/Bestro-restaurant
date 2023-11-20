import axios from "axios";

///create a instance
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    //used axios interceptors
    ///request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    },
        function (error) {
            return Promise.reject(error)
        }

    )


    ////intercept 401 and 403 status
    ///response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        ////read the status error
        const status = error.response.status
        console.log('status error', status)
        return Promise.reject(error)
    }
    )


    return axiosSecure
};

export default useAxiosSecure;