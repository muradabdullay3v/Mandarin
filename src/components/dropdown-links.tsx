"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { LinkDropDownItem } from "../types/linkDropdownItem";
import Link from "next/link";

interface IDropdownLinksProps {
  title: string;
  links: LinkDropDownItem[];
}

const DropdownLinks = ({ title, links }: IDropdownLinksProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="inline-flex items-center gap-1 cursor-pointer">
      {title} <ChevronDown className="size-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuArrow className="fill-white" />
      {links.map((link) => (
        <DropdownMenuItem key={link.href} className="cursor-pointer">
          <Link href={link.href}>{link.name}</Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default DropdownLinks;
