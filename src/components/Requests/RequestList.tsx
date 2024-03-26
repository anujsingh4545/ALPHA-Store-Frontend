import React from "react";

const RequestList = () => {
  return (
    <main className=" w-full border-[0.1px] flex flex-col items-center justify-center  gap-y-3 px-3 md:px-5 py-3 md:py-5 ">
      <section className=" flex flex-col items-start justify-start w-full  ">
        <p className=" font-medium ">Name</p>
        <p className=" text-[0.8rem] text-zinc-800 dark:text-zinc-400 ">Anuj Kumar Singh</p>
      </section>
      <section className=" flex flex-col items-start justify-start w-full  ">
        <p className=" font-medium ">Email Address</p>
        <p className=" text-[0.8rem] text-zinc-800 dark:text-zinc-400 ">anujkumarsingh6544@gmail.com</p>
      </section>
      <section className=" flex flex-col items-start justify-start w-full  ">
        <p className=" font-medium ">Phone Number</p>
        <p className=" text-[0.8rem] text-zinc-800 dark:text-zinc-400 ">9140971612</p>
      </section>
      <section className=" flex flex-col items-start justify-start w-full  ">
        <p className=" font-medium ">Company Name</p>
        <p className=" text-[0.8rem] text-zinc-800 dark:text-zinc-400 ">Alpha Traders</p>
      </section>
      <section className=" flex flex-col items-start justify-start w-full  ">
        <p className=" font-medium ">Company Description</p>
        <p className=" text-[0.8rem] text-zinc-800 dark:text-zinc-400 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora laborum ab tempore natus sint soluta fugiat porro est. Natus? </p>
      </section>

      <section className=" flex items-center w-full justify-start mt-2 gap-x-3 ">
        <button className=" tracking-wider px-5 py-2 text-white bg-black dark:bg-zinc-800 ">Approve</button>
        <button className=" tracking-wider px-7 py-2 text-white bg-red-600 ">Reject</button>
      </section>
    </main>
  );
};

export default RequestList;
