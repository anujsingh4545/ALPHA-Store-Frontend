import MerchantList from "@/components/Merchants/MerchantList";
import React from "react";

const Merchants = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <h1 className="  w-full border-b-[0.1px] pb-3 text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Merchants</h1>

      <section className=" mt-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-2 items-center justify-start gap-y-2 no-scrollbar overflow-y-scroll   ">
        <MerchantList />
        <MerchantList />
        <MerchantList />
        <MerchantList />
        <MerchantList />
      </section>
    </main>
  );
};

export default Merchants;
