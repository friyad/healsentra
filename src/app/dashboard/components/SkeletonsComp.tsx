import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface TableSkeletonsProps {
  className?: string;
  skeletonCount?: number;
}

export const TableSkeletons = ({
  className,
  skeletonCount = 10,
}: TableSkeletonsProps) => {
  return (
    <div className={cn("min-h-[calc(100dvh-310px)]", className)}>
      <Skeleton className="h-14 w-full rounded bg-primary/10" />
      {[...Array(skeletonCount)].map((_, index) => (
        <Skeleton key={index} className="h-14 w-full rounded mt-1" />
      ))}
    </div>
  );
};

export const PatientsPageSkeletons = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <Skeleton className="h-10 w-44 rounded bg-primary/10" />
        <Skeleton className="h-10 w-72 rounded bg-primary/10" />
      </div>
      <Skeleton className="h-14 w-full rounded bg-primary/10" />
      {[...Array(10)].map((_, index) => (
        <Skeleton key={index} className="h-14 w-full rounded mt-1" />
      ))}
    </>
  );
};
