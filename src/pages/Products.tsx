import ProductList from "@/components/Products/ProductList";
import React from "react";

const Products = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <h1 className="  w-full border-b-[0.1px] pb-3 text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Products</h1>

      <section className=" mt-5 w-full flex flex-col items-center justify-start gap-y-5  h-[30rem] no-scrollbar overflow-y-scroll   ">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </section>
    </main>
  );
};

export default Products;
