import OrderItem from "@/Common/Navbar/OrderItem";
import React from "react";
import {Link} from "react-router-dom";
import OrderItemsList from "./OrderItemsList";

const OrderDetail = () => {
  return (
    <main className=" px-5 md:px-20 my-8  w-full  h-full flex flex-col ">
      <section className=" flex justify-between items-center border-b-[0.1px] pb-3 ">
        <h1 className="  w-full text-[1.1rem]  tracking-wider font-semibold  text-gray-800 dark:text-white/95">Order Details</h1>

        <Link to="/dashboard/orders" className=" w-full flex  items-end justify-end ">
          <button className="  border-[0.1px] px-3 py-1 font-medium  "> Back to orders</button>
        </Link>
      </section>

      <section className=" flex items-center justify-between flex-col md:flex-row w-full">
        <section className=" w-full ">
          <div className="  flex items-center justify-between lg:justify-start  mt-5 ">
            <p className=" w-fit  lg:w-60 ">Order Number</p>
            <p className=" font-semibold">9349i49iivf04rfkvfkfefimeif43</p>
          </div>

          <div className=" flex items-center justify-between lg:justify-start mt-1">
            <p className=" lg:w-60 ">Order Date</p>
            <p className=" font-semibold ">Thursday, Apr 15, 2024</p>
          </div>
        </section>

        <button className="   text-white px-3 py-2 font-medium mt-8 md:mt-0 w-full  md:w-40  bg-red-600 "> Cancel-Order</button>
      </section>

      <div className=" grid grid-cols-1 gap-y-5 lg:grid-cols-6 gap-x-5 mt-10 justify-start  h-fit ">
        <section className="lg:col-span-4 lg:mt-4 ">
          <h1 className="  w-full text-[1rem]  tracking-wider font-semibold border-b-[0.1px] pb-3  text-gray-800 dark:text-white/95">Order Items</h1>

          <div className=" flex flex-col items-center justify-center w-full gap-y-3 mt-5 ">
            <OrderItemsList />
            <OrderItemsList />
            <OrderItemsList />
            <OrderItemsList />
          </div>
        </section>

        <section className="lg:col-span-2 border-[0.1px] px-4 py-4  h-fit flex flex-col items-center justify-center">
          <h1 className="  w-full text-[1rem]  tracking-wider font-semibold border-b-[0.1px] pb-3  text-gray-800 dark:text-white/95">Order Summary</h1>

          <div className=" flex flex-col gap-y-3  w-full border-b-[0.1px] py-5 ">
            <section className=" flex items-center justify-between w-full">
              <p className=" ">Subtotal</p>
              <p className=" font-medium ">🪙 90</p>
            </section>
            <section className=" flex items-center justify-between w-full">
              <p className=" ">Est. Sales Tax</p>
              <p className=" font-medium ">🪙 3.5</p>
            </section>
            <section className=" flex items-center justify-between w-full">
              <p className=" ">Shipping & Handling</p>
              <p className=" font-medium ">🪙 0</p>
            </section>
          </div>
          <section className=" flex items-center justify-between w-full mt-3">
            <p className=" ">Total</p>
            <p className=" font-medium ">🪙 93.5</p>
          </section>
        </section>
      </div>

      {/*  */}
    </main>
  );
};

export default OrderDetail;
