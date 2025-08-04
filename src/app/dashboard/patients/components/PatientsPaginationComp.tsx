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
    <div className="flex items-center justify-between mb-5">
      <Select
        value={limit.toString()}
        onValueChange={(value) => setLimit(parseInt(value))}
      >
        <SelectTrigger className="w-[180px]">
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
        className="h-12 w-1/3 placeholder:text-base !text-base"
      />

      
        <Pagination className="w-fit block mx-0">
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
  );
};

export default PatientsPaginationComp;
