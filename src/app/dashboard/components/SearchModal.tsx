"use client";

import React from "react";
import useGlobalStore from "@/store/store";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const SearchModal = () => {
  const { isSearchOpen, setSearchOpen } = useGlobalStore();

  return (
    <>
      <CommandDialog
        open={isSearchOpen}
        onOpenChange={setSearchOpen}
        className="overflow-auto max-h-[95dvh]"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Dashboard Overview</CommandItem>
            <CommandItem>Analytics</CommandItem>
            <CommandItem>Settings</CommandItem>
            <CommandItem>Support</CommandItem>
            <CommandItem>Appointments</CommandItem>
            <CommandItem>Inventory Management</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchModal;
