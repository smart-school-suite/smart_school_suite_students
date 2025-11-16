import { useQuery } from "@tanstack/react-query";
import { getCoursesBySemester } from "../../../services/course";

export const useGetCoursesBySemester = (studentId, semesterId) => {
      return useQuery({
         queryKey:["courses", semesterId],
         queryFn:() => getCoursesBySemester( semesterId, studentId)
      })
}