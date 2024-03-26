import {X} from "lucide-react";
import React from "react";

const WishlistItems = () => {
  return (
    <main className=" relative w-full border-[0.1px] flex items-center justify-center gap-x-3 md:gap-x-5  rounded-l-md rounded-r-md  cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ">
      <section className=" w-[5rem] lg:w-[7rem]  ">
        <img src="/placeholder-image.png" alt="" className="rounded-l-md" />
      </section>

      <section className="flex-1  flex flex-col pr-2  gap-y-1">
        <p className=" font-semibold line-clamp-1 text-[0.9rem] md:text-[1rem]">Macbook Laptops </p>
        <p className=" dark:text-slate-200 text-[0.7rem] md:text-[0.8rem] line-clamp-1 ">$2500 </p>
        <p className=" dark:text-slate-200 text-[0.7rem] md:text-[0.8rem] line-clamp-1 ">Wishlist added on Saturday, Feb 24, 2024 </p>
      </section>

      <div className=" bg-zinc-200 dark:bg-zinc-800 rounded-full  p-1  cursor-pointer flex items-center justify-center absolute top-1 right-1">
        <X size={10} />
      </div>
    </main>
  );
};

export default WishlistItems;
