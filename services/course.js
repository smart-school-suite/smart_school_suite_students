import axiosInstance from "../axios/authAxios";

export const getAllCourses = async (studentId) => {
     const response = await axiosInstance.get(`course/student/${studentId}`);
     return response.data;
}

export const getCoursesBySemester =  async (semesterId, studentId) => {
     const response = await axiosInstance.get(`course/semester/${semesterId}/student/${studentId}`);
     return response.data;
}