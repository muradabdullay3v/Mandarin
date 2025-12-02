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
    <nav className="border-b bg-brand">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold flex items-center gap-2">
          <Image
            src="/images/mandarin-logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <p className="text-white">Mandarin</p>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
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
    </nav>
  );
}
