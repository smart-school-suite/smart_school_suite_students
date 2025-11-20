import { useQuery } from "@tanstack/react-query";
import { getExamBySemester } from "../../../services/exam";

export const useGetExamBySemester = (studentId, semesterId) => {
     return useQuery({
         queryKey:["exams", semesterId],
         queryFn:() => getExamBySemester(studentId, semesterId),
         enabled:!!semesterId
     })
}