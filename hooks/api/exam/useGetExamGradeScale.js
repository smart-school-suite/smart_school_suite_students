import { useQuery } from "@tanstack/react-query";
import { getExamGradeScale } from "../../../services/exam";

export const useGetExamGradeScale = (examId) => {
     return useQuery({
         queryKey:["exam-grade-scale", examId],
            queryFn:() => getExamGradeScale(examId),
            enabled:!!examId
     })
}