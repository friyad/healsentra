import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPatients } from "../api/patients.api";

export const usePatientsQuery = (
  page: number,
  limit: number,
  search: string
) => {
  return useQuery({
    queryKey: ["patients", page, limit, search],
    queryFn: () => getPatients(page, limit, search),
    placeholderData: keepPreviousData,
  });
};
