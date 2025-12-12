import { Accordion } from "@/src/components/ui/accordion";
import { ACCORDION_DATA } from "./constants";
import AccordionsItem from "./_components/Accordion";

export const Accordions = () => (
  <Accordion type="single" collapsible className="w-full">
    {ACCORDION_DATA.map(({ title, content }) => (
      <AccordionsItem key={title} title={title} content={content} />
    ))}
  </Accordion>
);
