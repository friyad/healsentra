"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useGlobalStore from "@/store/store";
import Link from "next/link";
import React from "react";

const HelpModal = () => {
  const { isHelpOpen, setHelpOpen } = useGlobalStore();

  return (
    <>
      <Dialog open={isHelpOpen} modal onOpenChange={setHelpOpen}>
        <DialogContent className="sm:max-w-[525px] overflow-auto max-h-[95dvh]">
          <DialogHeader>
            <DialogTitle>Help</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 ">
            <p className="font-medium text-center text-lg mt-5">
              More details is on the way!
            </p>

            <p className="text-center">
              If you need assistance, please refer to our documentation or
              contact support. You can also check out our{" "}
              <Link
                href="https://example.com/faq"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                FAQ
              </Link>{" "}
              for common questions.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HelpModal;
