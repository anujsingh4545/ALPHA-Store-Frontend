import RequestList from "@/components/Requests/RequestList";
import React from "react";

const Requests = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <h1 className="  w-full border-b-[0.1px] pb-3 text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Requests</h1>

      <section className=" mt-5 w-full flex flex-col items-center justify-start gap-y-5  h-[30rem] no-scrollbar overflow-y-scroll   ">
        <RequestList />
        <RequestList />
        <RequestList />
        <RequestList />
      </section>
    </main>
  );
};

export default Requests;
