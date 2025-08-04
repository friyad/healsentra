import { cn } from "@/lib/utils";
import { IconDatabaseX, IconMoodSad } from "@tabler/icons-react";
import React from "react";

interface Props {
  className?: string;
  title?: string;
  message?: string;
}

const NoDataFoundComponent = ({ className, message, title }: Props) => {
  return (
    <div
      className={cn(
        "border min-h-[calc(100dvh-250px)] py-6 flex flex-col justify-center items-center",
        className
      )}
    >
      <IconDatabaseX className="size-20 text-primary" />
      {message && (
        <p className="text-xl font-medium text-primary mt-3 italic">{title}</p>
      )}
      {title && <p className="text-base text-primary mt-1">{message}</p>}
    </div>
  );
};

export default NoDataFoundComponent;
