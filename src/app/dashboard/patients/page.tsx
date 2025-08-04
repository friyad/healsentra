import { Metadata } from "next";
import PatientsListPage from "./components/PatientsListPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healsentra - Dashboard - Patients",
};

export default function Patients() {
  return (
    <div className="px-4 pb-5 min-h-[calc(100dvh-110px)]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Patients List</h2>

        <Link href="/dashboard/patients/add">
          <Button size="lg" className="cursor-pointer">
            Add a Patient
          </Button>
        </Link>
      </div>

      <PatientsListPage />
    </div>
  );
}
