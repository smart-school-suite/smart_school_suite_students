import { useQuery } from "@tanstack/react-query";
import { getAllExams } from "../../../services/exam";

export const useGetAllExams = (studentId) => {
     return useQuery({
        queryKey:["exams", studentId],
         queryFn:() => getAllExams(studentId),
         enabled:!!studentId
     })
}