import { cn } from "@/lib/utils";
import { IconMoodSad } from "@tabler/icons-react";
import React from "react";

interface Props {
  className?: string;
  title?: string;
  message?: string;
}

const ErrorComponent = ({ className, message, title }: Props) => {
  return (
    <div
      className={cn(
        "border min-h-[calc(100dvh-210px)] py-6 flex flex-col justify-center items-center",
        className
      )}
    >
      <IconMoodSad className="size-20 text-primary" />
      {title && <p className="text-base text-primary mt-3">{title}</p>}
      {message && (
        <p className="text-xl font-medium text-primary mt-1 italic">
          {message}
        </p>
      )}
    </div>
  );
};

export default ErrorComponent;
