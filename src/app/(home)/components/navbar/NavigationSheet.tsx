import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavMenu } from "./NavMenu";
import { IconMenu } from "@tabler/icons-react";
import Logo from "@/components/Logo";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <IconMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Button variant="outline" className="w-full sm:hidden">
            Sign In
          </Button>
          <Button className="w-full xs:hidden">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
