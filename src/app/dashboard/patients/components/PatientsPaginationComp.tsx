import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  totalPages: number;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}

const PatientsPaginationComp = ({
  page,
  setPage,
  limit,
  setLimit,
  totalPages,
  searchValue,
  setSearchValue,
}: Props) => {
  const handlePrevPage = () => {
    if (totalPages <= 0) return;
    setPage((prev) => {
      return prev > 1 ? prev - 1 : 1;
    });
  };
  const handleNextPage = () => {
    if (totalPages <= 0) return;
    setPage((prev) => {
      return prev < totalPages ? prev + 1 : totalPages;
    });
  };

  const handlePageClick = (pageNumber: number) => {
    if (totalPages <= 0) return;
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  return (
    <div className="grid grid-cols-1 xsm:grid-cols-5 min-[1150px]:grid-cols-12 gap-y-4 xsm:gap-y-6 min-[1150px]:gap-y-0 items-center mb-5">
      <Select
        value={limit.toString()}
        onValueChange={(value) => setLimit(parseInt(value))}
      >
        <SelectTrigger className="xsm:col-span-1 ml-auto xsm:ml-0 !h-10 2xl:!h-12 w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Pages</SelectLabel>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input
        placeholder="Search with name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="xsm:col-span-4 min-[1150px]:col-span-5 h-10 2xl:h-12 xsm:w-5/6 ml-auto min-[1150px]:ml-3 placeholder:text-sm 2xl:placeholder:text-base !text-sm 2xl:!text-base"
      />

      <div className="xsm:col-span-5 min-[1150px]:col-span-6 flex justify-end items-center">
        <Pagination className="w-fit mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {page > 3 && (
              <>
                <PaginationItem>
                  <PaginationLink onClick={() => handlePageClick(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {page > 1 && (
              <PaginationItem>
                <PaginationLink onClick={() => handlePageClick(page - 1)}>
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink isActive>{page}</PaginationLink>
            </PaginationItem>

            {totalPages > page && (
              <PaginationItem>
                <PaginationLink onClick={() => handlePageClick(page + 1)}>
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {page + 1 < totalPages && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink onClick={() => handlePageClick(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default PatientsPaginationComp;
