import BrandList from "@/components/Brands/BrandList";
import React from "react";
import {Link} from "react-router-dom";

const Brands = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <section className=" flex justify-between items-center border-b-[0.1px] pb-3 ">
        <h1 className="  w-full text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Brands</h1>

        <Link to="/dashboard/brands/add">
          <button className="  border-[0.1px] px-3 py-1 font-medium "> Add</button>
        </Link>
      </section>

      <section className=" mt-5 w-full flex flex-col items-center justify-start gap-y-5  h-[30rem] no-scrollbar overflow-y-scroll   ">
        <BrandList />
        <BrandList />
        <BrandList />
        <BrandList />
        <BrandList />
        <BrandList />
        <BrandList />
        <BrandList />
      </section>
    </main>
  );
};

export default Brands;
