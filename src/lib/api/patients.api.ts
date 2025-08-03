import { Patient } from "@/app/dashboard/types/patients-types";
import { axios } from "./axios";

export const getPatients = async () => {
  const { data } = await axios.get<Patient[]>("/patients");
  return data;
};
