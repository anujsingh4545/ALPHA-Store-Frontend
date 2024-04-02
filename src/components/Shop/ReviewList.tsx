import React from "react";

const ReviewList = ({star, percent, per, color}: {star: string; percent: string; per: string; color: string}) => {
  console.log(per);
  return (
    <div className="  w-full grid grid-cols-12 items-center justify-center ">
      <p className=" w-full col-span-2  font-medium ">{star} Star</p>

      <section className=" col-span-8 bg-gray-200 dark:bg-zinc-800 flex items-start justify-start h-4">
        <div className={` h-full  ${percent}  ${color} `}></div>
      </section>

      <p className=" w-full text-right  col-span-2 font-medium ">{per}%</p>
    </div>
  );
};

export default ReviewList;
