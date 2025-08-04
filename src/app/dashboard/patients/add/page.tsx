import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healsentra - Dashboard - Add Patient",
};

export default function AddPatient() {
  return (
    <div className="px-4 pb-5 min-h-[calc(100dvh-110px)]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Add a Patient</h2>

        <Link href="/dashboard/patients">
          <Button variant="outline" size="lg" className="cursor-pointer">
            Back
          </Button>
        </Link>
      </div>

      <div className="bg-primary-foreground rounded-lg shadow-md p-5">
        <p className="text-accent-foreground">This is the patients list page.</p>
      </div>
    </div>
  );
}
