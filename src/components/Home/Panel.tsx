import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

import Bannner1 from "/banners/banner-1-min.jpg";
import Bannner5 from "/banners/banner-5-min.jpg";
import Bannner3 from "/banners/banner-3-min.jpg";
import Bannner4 from "/banners/banner-4-min.jpg";
import Bannner7 from "/banners/banner-7-min.jpg";
import Bannner6 from "/banners/banner-6-min.jpg";

const Panel = () => {
  return (
    <main className=" px-5 md:px-20 py-10 flex flex-col md:flex-row  items-center justify-start w-full gap-5 ">
      <section className=" w-full md:w-[25%]  flex flex-col gap-y-8 min-h-[23rem] ">
        <img src={Bannner1} alt="" />
        <img src={Bannner5} alt="" />
      </section>

      <section className=" flex-1  mx-10 md:mx-0 z-0   items-center justify-center">
        <Carousel className=" flex items-center justify-center min-w-[20rem] z-0 ">
          <CarouselContent className=" z-0 ">
            <CarouselItem>
              <img src={Bannner3} alt="" className=" z-0 " />
            </CarouselItem>
            <CarouselItem>
              <img src={Bannner4} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={Bannner7} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="  w-full md:w-[25%] gap-y-8 flex flex-col min-h-[23rem] ">
        <img src={Bannner1} alt="" />
        <img src={Bannner6} alt="" />
      </section>
    </main>
  );
};

export default Panel;
