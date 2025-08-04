import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healsentra - Dashboard - Patients",
};

export default function PatientDetails({ params }: { params: { id: string } }) {
  const { id } = params;

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

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Patient ID: {id}</h3>
        <p className="text-gray-700">Details for patient with ID: {id}</p>
      </div>
    </div>
  );
}
