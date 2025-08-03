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
    <div className={cn("p-4 min-h-[calc(100dvh-110px)]", className)}>
      <Skeleton className="h-14 w-full rounded bg-primary/10" />
      {[...Array(skeletonCount)].map((_, index) => (
        <Skeleton key={index} className="h-14 w-full rounded mt-1" />
      ))}
    </div>
  );
};
