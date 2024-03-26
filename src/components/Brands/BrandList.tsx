import React from "react";
import {Link} from "react-router-dom";

const BrandList = () => {
  return (
    <Link to="/dashboard/brands/edit/id">
      <main className="  w-full border-[0.1px] flex items-center justify-center gap-x-3 md:gap-x-5  rounded-l-md rounded-r-md  cursor-pointer  hover:bg-black/5 dark:hover:bg-white/5 ">
        <section className="flex-1  flex flex-col px-5 py-5 gap-y-1">
          <p className=" font-semibold line-clamp-1 text-[0.8rem] md:text-[1rem]">Gucci</p>
          <p className=" dark:text-slate-200 text-[0.7rem] md:text-[0.8rem] line-clamp-1 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, neque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </section>
      </main>
    </Link>
  );
};

export default BrandList;
