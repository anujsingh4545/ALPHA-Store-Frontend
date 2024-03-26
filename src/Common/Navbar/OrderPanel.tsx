import {X} from "lucide-react";
import OrderItem from "./OrderItem";

const OrderPanel = ({toggleOrder, showorder}: any) => {
  return (
    <>
      <section className={` z-40 fixed top-0  md:w-[450px] w-[320px] bg-gray-100 h-[100dvh] shadow-sm ${showorder ? "right-0" : "right-[-500px] "} ease-in-out duration-300  `}>
        <div className=" flex items-end justify-end px-3 py-4 h-14  border-b-[0.1px] dark:border-gray-300 ">
          <X size={24} className=" cursor-pointer dark:text-black " onClick={toggleOrder} />
        </div>

        {/* <div className=" flex  dark:text-black  flex-col gap-y-5  pb-20 h-full items-center justify-center  ">
          <ShoppingCart size={40} />
          <p className=" text-[1rem] tracking-widest ">Your shopping cart is empty!</p>
        </div> */}

        <div className=" flex items-center justify-between flex-col  h-[calc(100dvh-56px)] w-full">
          {/*  */}

          <main className=" h-full w-full  overflow-y-scroll  bg-white">
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </main>

          {/*  */}
          <section className=" flex  border-t-[0.1px] dark:border-gray-300  h-fit flex-col text-black w-full ">
            <div className=" flex items-center justify-between py-3 px-5 ">
              <p>Free Shipping</p>
              <p>$0</p>
            </div>
            <div className=" flex items-center justify-between px-5 pb-3">
              <p>Total</p>
              <p>$119</p>
            </div>

            {/*  */}

            <div className=" flex gap-3 md:gap-5 dark:border-gray-300 border-t-[0.1px] items-center  justify-center py-3 bg-white ">
              <button className=" order1 ">Continue Shopping</button>
              <button className=" order1 ">Place Order</button>
            </div>
          </section>

          {/*  */}
        </div>
      </section>

      {showorder && <section className=" z-20 fixed top-0 left-0 w-[100%] bg-[#b1afaf18] cursor-pointer flex-1 h-[100dvh]" onClick={toggleOrder}></section>}
    </>
  );
};

export default OrderPanel;
