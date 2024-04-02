import React from "react";

const Sell = () => {
  return (
    <main className=" px-5 md:px-20 my-8 w-full ">
      <h1 className=" text-[1rem] font-semibold tracking-widest border-b-[0.1px] pb-5 ">Become a Alpha Store Seller!</h1>

      <section className=" mt-5 grid w-full  justify-start items-start  grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 gap-x-10">
        <div className=" flex flex-col w-full order-2 md:order-1  ">
          <p className=" font-medium pb-1 ">Name</p>
          <input type="text" placeholder="Enter your name" autoComplete="on" name="name" className=" dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full " />

          <p className=" font-medium pb-1 mt-5 ">Email address</p>
          <input type="text" placeholder="Enter your email" autoComplete="on" name="email" className=" dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full " />
          <p className=" font-medium pb-1 mt-5 ">Phone number</p>
          <input type="number" placeholder="Enter your phone number" autoComplete="on" name="phone" className=" dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full " />
          <p className=" font-medium pb-1 mt-5 ">Comapny Name</p>
          <input type="text" placeholder="Enter your company name" autoComplete="on" name="company" className=" dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full " />

          <p className=" font-medium pb-1 mt-5 ">Business</p>
          <textarea name="" id="" rows={3} className="dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full" placeholder="Please describe your business" />

          <div className=" border-t-[0.1px] w-full my-6 "></div>

          <button className="  px-10 py-2  border-[0.1px]  font-medium w-fit  ">Submit</button>
        </div>

        <div className="  flex items-center w-full justify-center flex-col-reverse  md:flex-col gap-y-5 order-1 md:order-2 ">
          <section className=" bg-black/5 dark:bg-white/5 w-full px-5 py-8 ">
            <p className=" text-[1.2rem] font-semibold w-full text-center tracking-widest ">Sell your Products on Alpha Store!</p>
            <p className=" my-2 w-full text-center ">Grow your business with MERN Store</p>
            <p className=" font-bold w-full text-center text-zinc-500 ">Apply Today</p>
          </section>
          <section>
            <img src="agreement.svg" alt="" className=" mx-auto w-[60%] md:w-[50%] " />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Sell;
