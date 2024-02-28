import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

const Panel = () => {
  return (
    <main className=" px-5 md:px-20 py-10 flex flex-col md:flex-row  items-center justify-start w-full gap-5 ">
      <section className=" w-full md:w-[25%]  flex flex-col gap-y-8 ">
        <img src="/banners/banner-1-min.jpg" alt="" />
        <img src="/banners/banner-5-min.jpg" alt="" />
      </section>

      <section className=" flex-1  mx-10 md:mx-0 z-0   items-center justify-center">
        <Carousel className=" flex items-center justify-center w-fit z-0 ">
          <CarouselContent className=" z-0 ">
            <CarouselItem>
              <img src="/banners/banner-3-min.jpg" alt="" className=" z-0 " />
            </CarouselItem>
            <CarouselItem>
              <img src="/banners/banner-4-min.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="/banners/banner-7-min.jpg" alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="  w-full md:w-[25%] gap-y-8 flex flex-col ">
        <img src="/banners/banner-1-min.jpg" alt="" />
        <img src="/banners/banner-6-min.jpg" alt="" />
      </section>
    </main>
  );
};

export default Panel;
