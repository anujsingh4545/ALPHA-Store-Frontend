import React from "react";
import {Link} from "react-router-dom";
import Toggle from "react-toggle";

const EditBrand = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <section className=" flex justify-between items-center border-b-[0.1px] pb-3 ">
        <h1 className="  w-full text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Edit Brand</h1>

        <Link to="/dashboard/brands">
          <button className="  border-[0.1px] px-3 py-1 font-medium "> Cancel</button>
        </Link>
      </section>

      <div className=" mt-10 w-full flex flex-col gap-y-5 ">
        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>Name</p>
          <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Shoes" />
        </section>
        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>Description</p>
          <textarea rows={4} className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black  " placeholder="Please enter your category description  "></textarea>
        </section>

        <section className="flex gap-x-3 items-center justify-start ">
          <p>Active?</p>
          <Toggle defaultChecked={true} />
        </section>

        <section className=" flex items-center justify-start gap-x-5 mt-3 text-[0.8rem] ">
          <button className=" px-10 py-2 border-[0.1px]  font-medium tracking-widest ">Save</button>
          <button className=" px-10 py-2 border-[0.1px]  font-medium tracking-widest  bg-red-500 text-white ">Delete</button>
        </section>
      </div>
    </main>
  );
};

export default EditBrand;
