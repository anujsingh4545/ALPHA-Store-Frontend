import React from "react";

const OrderItemsList = () => {
  return (
    <div className=" flex items-center justify-between w-full text-[0.6rem] md:text-[0.9rem] border-[0.1px] pr-2 rounded-md hover:bg-black/5 cursor-pointer  dark:hover:bg-white/5 ">
      <img src="/placeholder-image.png" alt="" className=" size-16 md:size-20 " />

      <section className=" flex-col items-center justify-start">
        <p className=" text-blue-600 font-semibold line-clamp-2 max-w-28 md:max-w-40 ">Extra Slim Fit Shirt </p>
        <p>🪙90</p>
      </section>
      <section className=" flex-col items-center justify-start">
        <p className=" font-medium text-center ">Delivered</p>
        <p className=" w-full text-center ">Status</p>
      </section>
      <section className=" flex-col items-center justify-start">
        <p className=" font-medium text-center ">1</p>
        <p className=" w-full text-center ">Quantity</p>
      </section>
      <section className=" hidden md:flex flex-col items-center justify-start">
        <p className=" font-medium text-center ">🪙90</p>
        <p className=" w-full text-center ">Total Price</p>
      </section>
      <button className=" hidden lg:flex border-[0.1px]  px-5 py-2  bg-white dark:bg-black">Review</button>
    </div>
  );
};

export default OrderItemsList;
