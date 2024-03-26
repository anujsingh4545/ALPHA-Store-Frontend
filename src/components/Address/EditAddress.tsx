import React from "react";
import {Link} from "react-router-dom";

const EditAddress = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <section className=" flex justify-between items-center border-b-[0.1px] pb-3 ">
        <h1 className="  w-full text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Edit Address</h1>

        <Link to="/dashboard/address">
          <button className="  border-[0.1px] px-3 py-1 font-medium "> Cancel</button>
        </Link>
      </section>

      <div className=" mt-5 w-full flex flex-col gap-y-3 border-b-[0.1px] pb-5 ">
        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>Address</p>
          <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Address: Street, House No / Apartment No" />
        </section>
        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>City</p>
          <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Enter city name" />
        </section>

        <section className=" grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center gap-x-5 gap-y-3 ">
          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>State</p>
            <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Enter state name" />
          </section>
          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>Country</p>
            <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Enter country name" />
          </section>
          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>Zipcode</p>
            <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Enter your zipcode" />
          </section>
        </section>
        <section className=" flex items-center justify-start w-full pt-4 gap-x-2">
          <input type="checkbox" />
          <p>As the Default</p>
        </section>
      </div>

      <section className=" w-full mt-5  gap-5 flex">
        <button className=" border-[0.1px] px-10 py-2 font-medium ">Save</button>
        <button className=" border-[0.1px] px-10 py-2 font-medium text-white bg-red-600 ">Delete</button>
      </section>
    </main>
  );
};

export default EditAddress;
