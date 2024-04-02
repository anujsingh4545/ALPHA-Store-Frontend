import React from "react";

const OrderSuccess = () => {
  return (
    <main className=" px-5 md:px-20 my-8  w-full ">
      <div className=" w-full my-10 flex flex-col items-center justify-center gap-y-2 ">
        <p className=" text-[1.2rem] tracking-wider font-bold ">Thank you for your order.</p>
        <p className=" text-[0.8rem] md:text-[0.9rem] ">
          Order <span className=" font-medium "> #660431abaf6ca3000f034d91</span> is complete.
        </p>
        <p className=" mt-1 text-[0.8rem]  md:text-[0.95rem] ">A confirmation email will be sent to you shortly.</p>

        <section className=" mt-5 w-full flex items-center  justify-center gap-x-3 md:gap-x-5 ">
          <button className="  px-5 md:px-10 py-3  border-[0.1px]  font-medium  ">Manage Orders</button>
          <button className="  px-5 md:px-10 py-3  border-[0.1px]  font-medium  ">Continue Shopping</button>
        </section>
      </div>
    </main>
  );
};

export default OrderSuccess;
