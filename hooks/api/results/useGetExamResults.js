import { useQuery } from "@tanstack/react-query";
import { getExamResults } from "../../../services/results";

export const useGetExamResults = (studentId, examId) => {
     return useQuery({
        queryKey:["exam-result", examId],
         queryFn:() => getExamResults(studentId, examId),
        enabled:!!examId
     })
}