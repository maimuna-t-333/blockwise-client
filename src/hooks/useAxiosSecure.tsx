import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth} from "../Firebase/firebase.config"

const axiosSecure = axios.create({
  baseURL: "https://blockwise-server.vercel.app", 
  // withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Request Interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async(config) => {
        const currentUser=auth.currentUser;
        if(currentUser){
          const token=await currentUser.getIdToken();
          config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
      },
    );

    // Optional: Response Interceptor to handle auth errors globally
    const responseInterceptor = axiosSecure.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
