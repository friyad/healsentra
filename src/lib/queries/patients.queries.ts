import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../api/patients.api";

export const usePatientsQuery = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
    refetchInterval: 5000, // Optional for live updates
  });
};
