"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useMemo } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { IconArrowsUpDown } from "@tabler/icons-react";
import { Patient } from "../../types/patients-types";
import PatientsTableRow from "./PatientsTableRow";

// data for columns
const keyAndLabels = [
  { key: "_id", label: "Patient Id" },
  { key: "firstName+lastName", label: "Name" },
  { key: "gender", label: "Gender" },
  { key: "dateOfBirth", label: "Date of Birth" },
  { key: "age", label: "Age" },
  { key: "bloodGroup", label: "B G" },
  { key: "contact.phone", label: "Phone" },
  { key: "contact", label: "Address" },
  { key: "status", label: "Status" },
  { key: "admissionDate", label: "Admission Date" },
  { key: "treatment", label: "Treatment" },
  { key: "", label: "Actions" },
];

interface Props {
  data: Patient[];
}

const PatientsTable = ({ data }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns: ColumnDef<Patient>[] = useMemo(() => {
    const colData: ColumnDef<Patient>[] = [];

    // Generate columns based on keyAndLabels
    keyAndLabels.forEach(({ key, label }, index) => {
      if (
        key === "" ||
        key === "contact" ||
        key === "_id" ||
        key === "treatment" ||
        key === "firstName+lastName" ||
        key === "contact.phone"
      ) {
        colData.push({
          header: label,
          accessorKey: key,
        });
        return;
      }

      colData.push({
        id: `${index}-${key}`,
        accessorKey: key,
        header: ({ column }) => {
          return (
            <button
              className="cursor-pointer select-none"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <span className="flex items-center justify-start text-right font-medium">
                {label}
                <IconArrowsUpDown className="ml-1 size-3.5" />
              </span>
            </button>
          );
        },
      });
    });

    return colData;
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="px-1 2xl:px-2 py-2 xl:py-3 2xl:py-4 last:border-r first:border-l bg-primary/5 dark:bg-accent"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table
            .getRowModel()
            .rows.map((row) => <PatientsTableRow key={row.id} row={row} />)
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default PatientsTable;
