import ProductList from "@/components/Products/ProductList";
import ProductListSeller from "@/components/Products/ProductListSeller";
import React from "react";
import {Link} from "react-router-dom";

const Products = () => {
  return (
    <main className="  w-full  h-full flex flex-col ">
      <section className=" flex justify-between items-center border-b-[0.1px] pb-3 ">
        <h1 className="  w-full text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Products</h1>

        <Link to="/dashboard/products/add">
          <button className="  border-[0.1px] px-3 py-1 font-medium "> Add</button>
        </Link>
      </section>

      <section className=" mt-5 w-full flex flex-col items-center justify-start gap-y-5  h-[30rem] no-scrollbar overflow-y-scroll   ">
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
        <ProductListSeller />
      </section>
      {/* <h1 className="  w-full border-b-[0.1px] pb-3 text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Products</h1>

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
      </section> */}
    </main>
  );
};

export default Products;
