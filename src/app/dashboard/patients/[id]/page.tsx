import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { getPatientById } from "@/lib/api/patients.api";
import { formatDateDaily } from "@/utils/date";
import DeletePatientBtnComp from "../components/DeletePatientBtnComp";

export const metadata: Metadata = {
  title: "Healsentra - Dashboard - Patients",
};

const fetchPatientData = async (id: string) => {
  try {
    const patientData = await getPatientById(id);
    return patientData;
  } catch (error) {
    return null;
  }
};

export default async function PatientDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetchPatientData(id);

  return (
    <div className="px-4 pb-5 min-h-[calc(100dvh-110px)]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Patients Details</h2>

        <Link href="/dashboard/patients">
          <Button size="lg" variant="outline" className="cursor-pointer">
            Back
          </Button>
        </Link>
      </div>

      {!res && (
        <div className="bg-white border p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Patient Not Found</h3>
          <p className="text-gray-500 mb-6">
            The patient with ID <span className="font-mono">{id}</span> does not
            exist or has been deleted.
          </p>
          <Link href="/dashboard/patients">
            <Button size="lg" variant="outline" className="cursor-pointer">
              Go Back to Patients List
            </Button>
          </Link>
        </div>
      )}

      {res && (
        <div className="bg-white border p-8 max-w-4xl mx-auto">
          {/* Patient Avatar and Basic Info */}
          <div className="flex flex-col lg:flex-row text-center lg:text-left items-center gap-6 mb-8">
            <div className="size-24 md:size-28 rounded-full bg-gray-100 flex items-center justify-center text-4xl font-bold text-primary/50 border-2 border-primary/80">
              {/* Placeholder for patient avatar */}
              {res.firstName.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">
                {res.firstName + " " + res.lastName}
              </h3>
              <p className="text-gray-500">
                Patient ID: <span className="font-mono">{res._id}</span>
              </p>

              <Badge
                variant="default"
                className="bg-green-100 text-green-700 capitalize"
              >
                {res.status || "Active"}
              </Badge>
            </div>
          </div>

          {/* Personal and Medical Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-sm xssm:text-base lg:text-lg font-bold mb-2">
                Personal Information
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium text-sm lg:text-base">Age:</span>{" "}
                  {res.age || "N/A"} years
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Gender:
                  </span>{" "}
                  {res.gender}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Date of Birth:
                  </span>{" "}
                  {formatDateDaily(res.dateOfBirth)}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Phone:
                  </span>{" "}
                  {res.contact.phone}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Email:
                  </span>{" "}
                  {res.contact.email || "N/A"}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Address:
                  </span>{" "}
                  {res.contact.address || "N/A"}, {res.contact.city || "N/A"},{" "}
                  {res.contact.state || "N/A"}, {res.contact.zipCode || "N/A"}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm xssm:text-base lg:text-lg font-bold mb-2">
                Medical Information
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Blood Type:
                  </span>{" "}
                  {res.bloodGroup}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Admission Date:
                  </span>{" "}
                  {formatDateDaily(res.admissionDate) || "N/A"}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Treatment:
                  </span>{" "}
                  {res.treatment || "N/A"}
                </li>
                <li>
                  <span className="font-medium text-sm lg:text-base">
                    Assigned Doctor ID:
                  </span>{" "}
                  {res.assignedDoctorId || "N/A"}
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Appointments Table */}
          <div>
            <h4 className="text-sm xssm:text-base lg:text-lg font-semibold mb-4">
              Recent Appointments
            </h4>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-accent">Date</TableHead>
                    <TableHead className="bg-accent">ID</TableHead>
                    <TableHead className="bg-accent">Doctor</TableHead>
                    <TableHead className="bg-accent">Diagnosis</TableHead>
                    <TableHead className="bg-accent">Treatment</TableHead>
                    <TableHead className="bg-accent">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {res.medicalRecords.map((record) => (
                    <TableRow key={record.recordId}>
                      <TableCell>{formatDateDaily(record.date)}</TableCell>
                      <TableCell>
                        {record.recordId.slice(-5, record.recordId.length)}
                      </TableCell>
                      <TableCell>{record.prescribedBy}</TableCell>
                      <TableCell>{record.diagnosis}</TableCell>
                      <TableCell>{record.treatment}</TableCell>
                      <TableCell>
                        <p className="line-clamp-4 break-all whitespace-break-spaces max-w-44">
                          {record.notes}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end mt-8 gap-3">
            <Button variant="secondary" className="px-6 cursor-pointer">
              Edit Details
            </Button>
            <DeletePatientBtnComp data={res} />
          </div>
        </div>
      )}
    </div>
  );
}
