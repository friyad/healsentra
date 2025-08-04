import { Patient } from "@/app/dashboard/types/patients-types";
import { axios } from "./axios";

export interface PatientsResponse {
  patients: Patient[];
  totalPages: number;
}

export const getPatients = async (
  page: number,
  limit: number,
  search: string
): Promise<PatientsResponse> => {
  const { data } = await axios.get("/patients", {
    params: {
      page,
      limit,
      search,
    },
  });
  return data;
};
