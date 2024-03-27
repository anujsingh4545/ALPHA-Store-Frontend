import React from "react";
import {Link} from "react-router-dom";

const AddressList = () => {
  return (
    <Link to="/dashboard/address/edit/first" className=" w-full ">
      <main className=" w-full flex items-center justify-center rounded-l-md rounded-r-md border-[0.1px] gap-x-3 md:gap-x-5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ">
        <section className=" w-[4rem] lg:w-[7rem] py-4 px-2 flex items-center justify-center ">
          <img src="/home.png" alt="" className="  size-12 md:size-14 " />
        </section>

        <section className="flex flex-1 flex-col items-center justify-start w-full gap-y-1 ">
          <p className="  font-medium w-full  line-clamp-1"> Default Delievery Addresss </p>
          <p className="  text-[0.7rem] md:text-[0.8rem] w-full line-clamp-2 pr-1 "> H.no : 33-I, adarsh nagar, Singharia, Kunraghat, Gkp (273008) </p>
        </section>
      </main>
    </Link>
  );
};

export default AddressList;
