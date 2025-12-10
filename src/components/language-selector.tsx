"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const languages = ["Az", "En", "Ru"];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-2 text-white px-4 py-2 text-md font-medium cursor-pointer">
        {selectedLanguage} <ChevronDown className="size-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <DropdownMenuArrow className="fill-white" />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onSelect={() => setSelectedLanguage(lang)}
            className="cursor-pointer"
          >
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
