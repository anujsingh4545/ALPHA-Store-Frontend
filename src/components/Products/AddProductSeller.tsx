import React from "react";
import {Link} from "react-router-dom";
import Toggle from "react-toggle";

const AddProductSeller = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <section className=" flex justify-between items-center border-b-[0.1px] pb-3 ">
        <h1 className="  w-full text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Add Product</h1>

        <Link to="/dashboard/products">
          <button className="  border-[0.1px] px-3 py-1 font-medium "> Cancel</button>
        </Link>
      </section>

      <form className=" mt-10 w-full flex flex-col gap-y-5 ">
        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>Name</p>
          <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Product name" />
        </section>
        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>Description</p>
          <textarea rows={4} className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black  " placeholder="Please enter your product description  "></textarea>
        </section>

        <div className="   grid grid-cols-1 lg:grid-cols-2  gap-x-5 gap-y-5 w-full ">
          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>Quantity</p>
            <input type="number" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Enter Quantity" />
          </section>
          <section className="flex flex-col gap-y-1  w-full justify-center  tracking-wider">
            <p>Price</p>
            <input type="number" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Enter price" />
          </section>
        </div>
        <div className="   grid grid-cols-1 lg:grid-cols-2  gap-x-5 gap-y-5 w-full ">
          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>Select Brand</p>

            <select className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black ">
              <option defaultChecked hidden>
                No options Selected
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </section>
          <section className="flex flex-col gap-y-1  w-full justify-center  tracking-wider">
            <p>Select Category</p>
            <select className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black ">
              <option defaultChecked hidden>
                No options Selected
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </section>
        </div>

        <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
          <p>Product Image</p>
          <input type="file" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Product name" />
        </section>

        <section className="flex gap-x-3 items-center justify-start ">
          <p>Active?</p>
          <Toggle defaultChecked={true} />
        </section>

        <section className=" flex items-center justify-start gap-x-5 mt-3  text-[0.8rem] ">
          <button className=" px-10 py-2 border-[0.1px]  font-medium tracking-widest ">Add Product</button>
        </section>
      </form>
    </main>
  );
};

export default AddProductSeller;
