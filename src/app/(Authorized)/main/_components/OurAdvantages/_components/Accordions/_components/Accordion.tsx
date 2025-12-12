"use client";

import React, { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { ADVANTAGES_DATA_WORDS_LIMIT } from "../constants";

interface AccordionsItemProps {
  title: string;
  content: string;
}

const AccordionsItem: React.FC<AccordionsItemProps> = ({ title, content }) => {
  const [showFull, setShowFull] = useState(false);

  const isLong = content.length > ADVANTAGES_DATA_WORDS_LIMIT;
  const displayedText =
    isLong && !showFull
      ? content.slice(0, ADVANTAGES_DATA_WORDS_LIMIT) + "..."
      : content;

  return (
    <AccordionItem
      value={title}
      className="mb-4 overflow-hidden bg-white shadow-[0px_2px_4px_0px_rgba(168,168,168,0.3)] transition-all duration-300 hover:bg-gray-50/80 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] sm:mb-5 sm:shadow-[0px_3px_6px_0px_rgba(168,168,168,0.4)] sm:hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] md:mb-6 md:shadow-[0px_5px_5px_0px_rgba(168,168,168,0.5)] md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
    >
      <AccordionTrigger className="px-6 py-4 text-xl font-semibold transition-all hover:bg-gray-50/50 hover:no-underline lg:text-2xl">
        <span className="pr-4 text-left sm:pr-6">{title}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-2">
        <div className="mt-0 pb-1 sm:pb-2">
          <span className="md:text-md text-sm leading-relaxed text-gray-400 sm:text-base sm:leading-loose">
            {displayedText}
          </span>
          {isLong && (
            <button
              className="ml-2 cursor-pointer text-sm font-light text-orange-600 transition-colors hover:text-orange-800 sm:text-base"
              onClick={(e) => {
                e.stopPropagation();
                setShowFull(!showFull);
              }}
            >
              {showFull ? "Show less" : "Ətraflı"}
            </button>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionsItem;
