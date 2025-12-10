import Image from "next/image";
import image from "./assets/images/why-us-image.png";
import Container from "@/src/components/wrappers/container";

export const OurAdvantages = () => {
  return (
    <div className="py-8 md:py-16 lg:py-20">
      <Container className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center md:items-start">
        <div className="w-full lg:max-w-xl flex-shrink-0">
          <Image 
            src={image} 
            alt="Why choose Mandarin" 
            className="rounded-sm w-full h-auto"
            priority
          />
        </div>
        <div className="w-full md:flex-1">
          <h3 className="text-primary text-2xl md:text-3xl lg:text-4xl font-semibold max-w-md leading-tight">
            Niyə Mandarin Tədris Mərkəzi?
          </h3>
        </div>
      </Container>
    </div>
  );
};
