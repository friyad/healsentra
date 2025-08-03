export type Gender = "male" | "female" | "other";
export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";
export type PatientStatus =
  | "admitted"
  | "discharged"
  | "outpatient"
  | "emergency";

export interface ContactInfo {
  phone: string;
  email?: string;
  address: string;
  city: string;
  state?: string;
  zipCode?: string;
}

export interface MedicalRecord {
  recordId: string;
  date: string; // ISO date string
  diagnosis: string;
  treatment: string;
  prescribedBy: string; // Doctor's ID or name
  notes?: string;
}

export interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string; // ISO date string
  age: number;
  bloodGroup?: BloodGroup;
  contact: ContactInfo;
  status: PatientStatus;
  admissionDate?: string; // ISO date if admitted
  dischargeDate?: string; // ISO date if discharged
  assignedDoctorId?: string;
  medicalRecords: MedicalRecord[];
  treatment: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}
