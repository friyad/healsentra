"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-500">
            Looks like we&apos;ve hit a snag in the digital realm.
          </p>
        </div>
        <Button size="lg" onClick={reset} className="cursor-pointer">
          Try again
        </Button>
      </div>
    </div>
  );
}
