import BrandBox from "@/components/Brand/BrandBox";

const Brand = () => {
  return (
    <div className=" px-5 md:px-20 flex flex-col items-center justify-center py-10  ">
      <p className=" text-[1.1rem]  font-semibold text-left w-full  ">SHOP BY BRAND</p>

      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4 mt-10 ">
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
        <BrandBox />
      </section>
    </div>
  );
};

export default Brand;
