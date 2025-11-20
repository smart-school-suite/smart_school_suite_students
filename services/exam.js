import axiosInstance from "../axios/authAxios";

export const getAllExams = async (studentId) =>  {
     const response = await axiosInstance.get(`exam/student/${studentId}/exams-all`);
     return response.data;
}

export const getExamBySemester = async (studentId, semesterId) => {
      const response = await axiosInstance.get(`exam/student/${studentId}/semester/${semesterId}`);
      return response.data;
} 

export const getExamTimetable = async (studentId, examId) => {
       const response = await axiosInstance.get(`exam-timetable/student/${studentId}/exam/${examId}/timetable`);
       return response.data;
}

export const getExamGradeScale = async (examId) => {
       const response = await axiosInstance.get(`exam/${examId}/grade-scale`);
       return response.data;
}