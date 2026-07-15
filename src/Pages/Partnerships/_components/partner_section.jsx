import Autoplay from "embla-carousel-autoplay";
import PartnerCard from "./partner-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function PartnerSection({ data }) {
  return (
    <section className="w-full flex justify-center">
      <div className="w-fit max-w-2xl max-md:w-full">
        {/* Shadcn Carousel + Embla Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="  mb-10 mt-4">
            {data.map((partner, index) => (
              <CarouselItem key={index} className="">
                <p className=" my-6 font-bold">{partner.title}</p>
                <PartnerCard
                  name={partner.name}
                  description={partner.description}
                  logo={partner.logo}
                  href={partner.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
