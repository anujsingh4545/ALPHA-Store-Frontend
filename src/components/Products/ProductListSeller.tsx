import React from "react";
import {Link} from "react-router-dom";

const ProductListSeller = () => {
  return (
    <Link to="/dashboard/products/edit/name">
      <main className=" relative w-full border-[0.1px] flex items-center justify-center gap-x-3 md:gap-x-5  rounded-l-md rounded-r-md  cursor-pointer">
        <section className=" w-[5rem] lg:w-[7rem]  ">
          <img src="/placeholder-image.png" alt="" className="rounded-l-md" />
        </section>

        <section className="flex-1  flex flex-col pr-1 ">
          <p className=" font-semibold line-clamp-1 text-[0.8rem] md:text-[0.9rem]">Nick Running shoes </p>
          <p className=" dark:text-slate-200 text-[0.7rem] md:text-[0.8rem] line-clamp-1 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, neque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </section>
      </main>
    </Link>
  );
};

export default ProductListSeller;
