
import axiosInstance from "../axios/authAxios";
export const getProfileDetails = async (studentId) => {
     const response = await axiosInstance.get(`student/${studentId}/profile`);
     return response.data;
}