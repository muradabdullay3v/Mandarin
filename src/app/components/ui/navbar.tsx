"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/src/app/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b bg-primary">
      <div className="max-w-7xl mx-auto p-4 flex items-center gap-8 justify-between">
        <Link
          href="/"
          className="text-xl font-semibold flex items-center gap-2 shrink-0"
        >
          <Image
            src="/images/mandarin-logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <p className="text-primary-foreground text-xl">Mandarin</p>
        </Link>
        <div className="hidden md:flex gap-8 text-primary-foreground font-normal items-center text-xl">
          <Link href="/about">Xidmət</Link>
          <Link href="/services">Resurslar</Link>
          <Link href="/contact">Haqqımızda</Link>
        </div>
        <div className="ml-auto flex items-center">
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
      </div>
    </nav>
  );
}
