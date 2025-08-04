import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPatientById, getPatients } from "../api/patients.api";

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

export const usePatientByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["patient", id],
    queryFn: () => getPatientById(id),
    enabled: !!id && id.length > 2, // Only run the query if id is truthy
  });
};
