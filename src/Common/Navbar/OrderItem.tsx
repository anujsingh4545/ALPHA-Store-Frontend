import {Trash2} from "lucide-react";

const OrderItem = () => {
  return (
    <div className=" flex items-center flex-col justify-center px-3 md:px-5 py-3 border-[0.1px] ">
      <section className=" flex items-center justify-between w-full  ">
        <div className=" flex  items-center justify-center gap-3 md:gap-5">
          <img src="/pwa.png" alt="" className=" size-16 rounded-md " />
          <p className=" text-[1rem] md:text-[1.1rem]  text-blue-500 font-medium cursor-pointer ">Converse All Star</p>
        </div>

        <Trash2 className=" font-normal text-slate-600 cursor-pointer hover:text-slate-800 " size={20} />
      </section>

      <section className=" w-full flex flex-col  gap-y-1 pt-2  ">
        <div className=" flex items-center justify-between ">
          <p>Price</p>
          <p>$30</p>
        </div>
        <div className=" flex items-center justify-between ">
          <p>Quantity</p>
          <p>1</p>
        </div>
      </section>
    </div>
  );
};

export default OrderItem;
