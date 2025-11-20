import axiosInstance from "../axios/authAxios";

export const getExamResults = async (studentId, examId) => {
  const response = await axiosInstance.get(
    `exam-results/exams/${examId}/students/${studentId}/results`
  );
  return response.data;
};
