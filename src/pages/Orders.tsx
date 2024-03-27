import OrderList from "@/components/Orders/OrderList";

const Orders = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <h1 className="  w-full border-b-[0.1px] pb-3 text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Your Orders</h1>

      <section className=" mt-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3    ">
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
      </section>
    </main>
  );
};

export default Orders;
