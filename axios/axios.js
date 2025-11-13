import axios from "axios";
export default axios.create({
    baseURL:"http://172.20.10.4:8000/api/v1/",
    withCredentials:true
})
