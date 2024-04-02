import React from "react";
import {Link} from "react-router-dom";

const OrderList = () => {
  return (
    <Link to="/order/32048434">
      <main className=" w-full flex items-center justify-center rounded-l-md rounded-r-md border-[0.1px] gap-x-3 md:gap-x-5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ">
        <section className=" w-[5rem] lg:w-[7rem]  flex items-center justify-center ">
          <img src="/placeholder-image.png" alt="" className=" rounded-l-md" />
        </section>

        <section className="flex flex-1 flex-col items-center justify-start w-full gap-y-1 text-[0.5rem] md:text-[0.75rem] ">
          <p className=" text-gray-700 dark:text-gray-400  w-full ">
            Status <span className=" text-black dark:text-white font-medium ">Delieverd</span>
          </p>
          <p className=" text-gray-700 dark:text-gray-400  w-full ">
            Order <span className=" text-black dark:text-white font-medium ">#12323ikmkdfmfkkfkwe3r43</span>
          </p>
          <p className=" text-gray-700 dark:text-gray-400  w-full ">
            Ordered On <span className=" text-black dark:text-white font-medium ">Thursday, April 15, 2024</span>
          </p>
          <p className=" text-gray-700 dark:text-gray-400  w-full ">
            Ordered Total <span className=" text-black dark:text-white font-medium ">$200</span>
          </p>
        </section>
      </main>
    </Link>
  );
};

export default OrderList;
