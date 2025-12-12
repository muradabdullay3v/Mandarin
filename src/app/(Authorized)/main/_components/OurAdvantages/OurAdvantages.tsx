import Image from "next/image";
import image from "./assets/images/why-us-image.png";
import Container from "@/src/components/wrappers/container";
import Accordions from "./_components/Accordions";

export const OurAdvantages = () => {
  return (
    <div className="py-8 md:py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-7 lg:gap-12">
          <div className="lg:col-span-4">
            <Image
              src={image}
              alt="Why choose Mandarin"
              className="h-auto w-full rounded-sm"
              priority
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-primary mb-8 max-w-md text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl">
              Niyə Mandarin Tədris Mərkəzi?
            </h3>
            <Accordions />
          </div>
        </div>
      </Container>
    </div>
  );
};
