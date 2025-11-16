import axiosInstance from "../axios/authAxios";

export const getSemesters = async () => {
     const response = await axiosInstance.get("/semester");
     return response.data;
}