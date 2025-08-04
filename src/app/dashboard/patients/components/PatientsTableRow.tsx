"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { Patient } from "../../types/patients-types";
import { Row } from "@tanstack/react-table";
import { formatDateDaily } from "@/utils/date";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { deletePatientById } from "@/lib/api/patients.api";
import { toast } from "sonner";

interface Props {
  row: Row<Patient>; // Adjust type based on your row structure
}

const PatientsTableRow = ({ row }: Props) => {
  const router = useRouter();
  const {
    _id,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    age,
    bloodGroup,
    contact,
    status,
    admissionDate,
    treatment,
  } = row.original;

  // Handle delete action
  const handleDelete = async () => {
    const confirm = window.confirm(
      `Are you sure you want to delete patient ${firstName} ${lastName}?`
    );
    if (!confirm) return;
    try {
      await deletePatientById(_id);
      toast.success("Patient deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete patient. Please try again later.");
    }
  };

  return (
    <TableRow data-state={row.getIsSelected() && "selected"}>
      <TableCell className="py-2 lg:py-3 2xl:py-4 border-l">
        <p className="text-sm 3xl:text-base uppercase">
          {_id.slice(-6, _id.length)}
        </p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base">{firstName + " " + lastName}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base capitalize">{gender}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base">{formatDateDaily(dateOfBirth)}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base">{age}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base">{bloodGroup}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base w-16 truncate 2xl:w-auto">
          {contact.phone}
        </p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <Tooltip>
          <TooltipTrigger>
            <p className="text-sm 3xl:text-base max-w-24 mxl:max-w-32 truncate cursor-default">
              {contact.address}, {contact.city}, {contact.state},{" "}
              {contact.zipCode}
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm 3xl:text-base">
              {contact.address}, {contact.city}, {contact.state},{" "}
              {contact.zipCode}
            </p>
          </TooltipContent>
        </Tooltip>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base capitalize">{status}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base">
          {formatDateDaily(admissionDate)}
        </p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4">
        <p className="text-sm 3xl:text-base capitalize">{treatment}</p>
      </TableCell>
      <TableCell className="py-2 lg:py-3 2xl:py-4 px-0 pl-2 border-r">
        <div className="flex justify-start items-center">
          <Button size="icon" variant="outline" className="cursor-pointer">
            <IconEdit />
          </Button>
          <Button
            onClick={handleDelete}
            size="icon"
            variant="outline"
            className="cursor-pointer"
          >
            <IconTrash className="text-red-400" />
          </Button>
          <Button
            onClick={() => router.push(`/dashboard/patients/${_id}`)}
            size="icon"
            variant="outline"
            className="cursor-pointer"
          >
            <IconEye />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default PatientsTableRow;
