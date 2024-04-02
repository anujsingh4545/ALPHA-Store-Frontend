import React from "react";

const Contact = () => {
  return (
    <main className=" px-5 md:px-20 my-8 w-full ">
      <h1 className=" text-[1rem] font-semibold tracking-widest border-b-[0.1px] pb-5 ">Contact Information</h1>

      <section className=" mt-10  grid  grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-10 ">
        <div className=" flex items-start w-full flex-col justify-start ">
          <p className=" font-medium pb-1 ">Name</p>
          <input type="text" placeholder="Enter your name" className=" dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full " />
        </div>
        <div className=" flex items-start w-full flex-col justify-start ">
          <p className=" font-medium pb-1 ">Email</p>
          <input type="text" placeholder="Enter your email" className=" dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full " />
        </div>
      </section>

      <p className=" font-medium pb-1 mt-5 ">Message</p>

      <textarea name="" id="" rows={5} className="dark:bg-black px-2 py-3 outline-none border-[0.1px] w-full" placeholder="Please describe your message" />

      <button className="  mt-5 px-10 py-2  border-[0.1px]  font-medium  ">Submit</button>
    </main>
  );
};

export default Contact;
