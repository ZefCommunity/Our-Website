import Autoplay from "embla-carousel-autoplay";
import PartnerCard from "./partner-card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function PartnerSection({ data, dir, title }) {
  return (
    <section className="w-full flex justify-center">
      <div className="w-fit max-w-2xl max-md:w-full">
        <p className={cn(" mt-6 font-bold", dir)}>{title}</p>

        {/* Shadcn Carousel + Embla Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="  mb-10 mt-4">
            {data.map((partner, index) => (
              <CarouselItem key={index} className="">
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
