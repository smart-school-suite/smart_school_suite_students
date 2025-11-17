import { useQuery } from "@tanstack/react-query";
import { getProfileDetails } from "../../../services/profile";

export const useGetProfileDetail = (studentId) => {
     return useQuery({
        queryKey:["studentProfile", studentId],
        queryFn:() =>  getProfileDetails(studentId),
        enabled:!!studentId
     })
} 