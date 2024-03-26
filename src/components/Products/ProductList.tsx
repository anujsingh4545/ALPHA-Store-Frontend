import {X} from "lucide-react";
import React from "react";

const ProductList = () => {
  return (
    <main className=" relative w-full border-[0.1px] flex items-center justify-center gap-x-3 md:gap-x-5  rounded-l-md rounded-r-md  cursor-pointer">
      <section className=" w-[5rem] lg:w-[7rem]  ">
        <img src="/placeholder-image.png" alt="" className="rounded-l-md" />
      </section>

      <section className="flex-1  flex flex-col pr-2 ">
        <p className=" font-semibold line-clamp-1 text-[0.8rem] md:text-[0.9rem]">Nick Running shoes </p>
        <p className=" dark:text-slate-200 text-[0.7rem] md:text-[0.8rem] line-clamp-1 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, neque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </section>

      <div className=" bg-zinc-200 dark:bg-zinc-800 rounded-full  p-1  cursor-pointer flex items-center justify-center absolute top-1 right-1">
        <X size={10} />
      </div>
      <div className="cursor-pointer flex items-center justify-center absolute bottom-1 right-2">
        <p className=" text-[0.5rem] md:text-[0.6rem] text-blue-700 font-semibold italic ">Celvin Klien</p>
      </div>
    </main>
  );
};

export default ProductList;
