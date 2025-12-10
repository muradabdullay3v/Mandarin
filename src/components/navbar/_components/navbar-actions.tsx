import Link from "next/link";

import { Menu } from "lucide-react";
import { Button } from "../../ui/button";
import LanguageSelector from "../../language-selector";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

export default function NavbarActions() {
  return (
    <div className="ml-auto flex items-center gap-4">
      <div className="hidden md:flex items-center gap-4">
        <Button title="Log in" className="bg-white text-primary text-md" />
        <LanguageSelector />
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden text-primary-foreground">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-4 mt-8 text-lg">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
