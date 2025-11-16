import { useQuery } from "@tanstack/react-query";
import { getSemesters } from "../../../services/semester";

export const useGetSemesters = () => {
     return useQuery({
         queryKey:["semester"],
         queryFn:() => getSemesters()
     })
}