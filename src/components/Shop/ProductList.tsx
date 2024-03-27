import {Heart} from "lucide-react";
import React from "react";

const ProductList = () => {
  return (
    <main className=" w-full cursor-pointer  flex flex-col items-center justify-center  border-[0.1px] dark:border-0 bg-white px-2 py-2 rounded-sm shadow-md dark:bg-black  ">
      <div className=" relative h-[12rem] ">
        <img src="/pwa.png" className=" w-full  h-full " alt="" />

        <section className=" absolute top-1 right-1   bg-gray-200 dark:bg-gray-900 rounded-full p-[5px] flex items-center justify-center ">
          <Heart size={16} className=" text-gray-500 dark:text-gray-700 hover:text-red-600 dark:hover:text-red-600 ease-in-out duration-150 transform " />
        </section>
      </div>

      <div className=" relative flex flex-col w-full px-1  gap-y-1 mt-1  h-[9rem]">
        <p className=" w-full  text-left font-bold line-clamp-2 text-blue-500 ">Macbook Laptop</p>
        <p className=" text-slate-500 line-clamp-1 ">
          By <span className=" text-black ">Tommy Hilfiger</span>
        </p>
        <p className="text-[0.7rem]  line-clamp-2 w-full  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corrupti molestias doloribus odit vel fugit eaque sint voluptas expedita at?</p>

        <section className=" bottom-0 absolute w-full justify-between text-[1rem] font-anta  flex ">
          <p>🪙120</p>
          <p>4.5⭐</p>
        </section>
      </div>
    </main>
  );
};

export default ProductList;
