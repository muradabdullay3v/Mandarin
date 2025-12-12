import Image from "next/image";
import image from "./assets/images/why-us-image.png";
import Container from "@/src/components/wrappers/container";
import Accordions from "./_components/Accordions";

export const OurAdvantages = () => {
  return (
    <div className="py-8 md:py-16 lg:py-20">
      <Container>
        <div className="grid lg:grid-cols-7 gap-6 md:gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Image
              src={image}
              alt="Why choose Mandarin"
              className="rounded-sm w-full h-auto"
              priority
            />
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-primary text-2xl md:text-3xl lg:text-4xl font-semibold max-w-md leading-tight mb-8">
              Niyə Mandarin Tədris Mərkəzi?
            </h3>
            <Accordions />
          </div>
        </div>
      </Container>
    </div>
  );
};
