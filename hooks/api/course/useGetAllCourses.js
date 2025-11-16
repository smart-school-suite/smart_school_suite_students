import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../../services/course";

export const useGetAllCourses = (studentId) => {
     return useQuery({
         queryKey: ["courses", studentId],
         queryFn:() => getAllCourses(studentId),
         enabled:!!studentId
     })
}