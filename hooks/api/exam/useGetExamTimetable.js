import { useQuery } from "@tanstack/react-query";
import { getExamTimetable } from "../../../services/exam";

export const useGetExamTimetable = (studentId, examId) => {
     return useQuery({
         queryKey:['exam-timetable', examId],
         queryFn:() => getExamTimetable(studentId, examId),
         enabled:!!examId
     })
}