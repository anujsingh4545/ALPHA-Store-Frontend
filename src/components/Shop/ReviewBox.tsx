import React from "react";
import Rating from "@mui/material/Rating";

const ReviewBox = () => {
  return (
    <main className="  flex  flex-col md:flex-row justify-between items-center w-full bg-white dark:bg-black border-[0.1px] p-5 rounded-sm ">
      <div className=" gap-5 flex items-center justify-center w-full ">
        <p className=" bg-teal-500 rounded-full p-4 size-9 flex items-center justify-center text-white font-medium ">c</p>

        <section className=" flex flex-col ">
          <p className=" font-medium  text-[1rem] tracking-wider ">Nice product</p>
          <p className=" text-[0.7rem] mt-[3px] ">Thursday, Oct 12, 2024</p>
          <p className=" italic mt-1 text-[0.7rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus omnis commodi illum repudiandae vel, error laboriosam explicabo unde itaque.</p>
        </section>
      </div>
      <section className=" flex w-full md:w-fit mt-2 md:mt-0 justify-end h-full items-center md:justify-center ">
        <Rating size="small" name="read-only" value={4} readOnly />
      </section>
    </main>
  );
};

export default ReviewBox;
