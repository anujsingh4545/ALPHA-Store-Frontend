import {X} from "lucide-react";
import React from "react";

const MerchantList = () => {
  return (
    <main className=" relative w-full border-[0.1px]  gap-y-1 flex flex-col items-center justify-center px-5 py-3 ">
      <p className=" w-full  font-medium tracking-widest text-blue-600  line-clamp-1 ">Alpha Traders</p>

      <p className=" w-full text-[0.8rem] line-clamp-1 ">
        Owner : <span> Anuj k Singh</span>
      </p>
      <p className=" w-full text-[0.8rem] line-clamp-1 ">
        Email : <span> anujkumarsingh6544@gmail.com</span>
      </p>
      <p className=" w-full text-[0.8rem]">
        Products : <span> 20</span>
      </p>

      <div className=" bg-zinc-200 dark:bg-zinc-800 rounded-full  p-1  cursor-pointer flex items-center justify-center absolute top-1 right-1">
        <X size={10} />
      </div>
    </main>
  );
};

export default MerchantList;
