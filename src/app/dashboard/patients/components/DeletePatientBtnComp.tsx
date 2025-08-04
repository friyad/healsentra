"use client";

import { deletePatientById } from "@/lib/api/patients.api";
import React from "react";
import { Patient } from "../../types/patients-types";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface Props {
  data: Patient;
}

const DeletePatientBtnComp = ({ data }: Props) => {
  // Handle delete action
  const handleDelete = async () => {
    const confirm = window.confirm(
      `Are you sure you want to delete patient ${data.firstName} ${data.lastName}?`
    );
    if (!confirm) return;
    try {
      await deletePatientById(data._id);
      toast.success("Patient deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete patient. Please try again later.");
    }
  };

  return (
    <Button
      onClick={handleDelete}
      variant="destructive"
      className="px-6 cursor-pointer"
    >
      Delete Patient
    </Button>
  );
};

export default DeletePatientBtnComp;
