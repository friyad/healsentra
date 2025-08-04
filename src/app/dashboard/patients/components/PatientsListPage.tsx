"use client";

import { usePatientsQuery } from "@/lib/queries/patients.queries";
import React, { useState } from "react";
import PatientsTable from "./PatientsTable";
import ErrorComponent from "../../components/ErrorComponent";
import {
  PatientsPageSkeletons,
  TableSkeletons,
} from "../../components/SkeletonsComp";
import NoDataFoundComponent from "../../components/NoDataFoundComponent";
import PatientsPaginationComp from "./PatientsPaginationComp";
import useDebounce from "@/hooks/use-debounce";

const PatientsListPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { data, isError, isSuccess, error, isLoading, isRefetching } =
    usePatientsQuery(page, limit, debouncedSearchValue);

  // Handle Loading State
  if (isLoading) {
    return <PatientsPageSkeletons />;
  }

  // Handle Error State
  if (isError && !isSuccess && !isLoading && error) {
    return (
      <ErrorComponent
        title="An error occurred while fetching patients data."
        message={error?.message || "Please try again later."}
      />
    );
  }

  return (
    <>
      {/* Pagination and Limit Selection component */}
      <PatientsPaginationComp
        totalPages={data ? data.totalPages : 0}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {isRefetching ? (
        <TableSkeletons skeletonCount={10} />
      ) : !data || data.patients.length === 0 ? (
        <NoDataFoundComponent
          title="No Patients Found"
          message="There are no patients available based on your request."
        />
      ) : (
        <PatientsTable data={data.patients} />
      )}
    </>
  );
};

export default PatientsListPage;
