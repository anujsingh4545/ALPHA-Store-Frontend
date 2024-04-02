import {ShoppingBasket} from "lucide-react";
import Rating from "@mui/material/Rating";
import ReviewList from "./ReviewList";
import {useState} from "react";
import ReviewBox from "./ReviewBox";

const ProductView = () => {
  const [value, setValue] = useState<number | null>(0);
  return (
    <main className="  px-3 md:px-20 py-5  bg-black/5 dark:bg-white/5 ">
      {/*  */}

      <section className="  flex flex-col md:flex-row  w-full gap-x-5">
        <div className=" w-full md:w-[40%]  relative  h-[25rem] flex items-center justify-center bg-white dark:bg-black px-5 py-5 ">
          <img src="/mac.jpeg" alt="" className=" max-w-full max-h-full " />

          <p className=" absolute top-0 text-white  dark:bg-zinc-800 right-0 px-3 py-2 bg-zinc-400 font-medium  ">Out of Stock</p>
        </div>

        {/*  */}

        <div className="  flex-1 flex-col  border-[0.1px] bg-white shadow-md dark:bg-black dark:border-0 p-5  ">
          <h1 className=" text-[1.3rem] tracking-wider text-blue-500 font-semibold border-b-[0.1px] pb-3 ">Macbook Laptop</h1>

          <p className=" mt-5 font-medium cursor-pointer hover:underline ">See More From Apple</p>
          <p className="mt-2 text-[0.7rem] md:text-[0.9rem] "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore mollitia deleniti libero porro blanditiis fuga quod. Quaerat, iusto nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt voluptatum optio nam porro! Obcaecati voluptatum minima molestiae inventore vero. </p>

          <p className=" mt-5 font-anta text-[1.5rem]  "> 🪙250 </p>

          <p className=" mt-3  font-medium">Quantity</p>
          <input type="number" className=" py-2 bg-zinc-200 outline-none w-full px-2 text-[1rem] mt-2 dark:bg-zinc-900 " min={1} placeholder="1" />

          <div className=" flex gap-x-3 items-center justify-start mt-5 ">
            <section className="  bg-sky-800 p-3 rounded-full cursor-pointer ">
              <img src="/social-icons/facebook2.svg" alt="" className=" size-4 text-white  " />
            </section>
            <section className="  bg-blue-500 p-3 rounded-full cursor-pointer ">
              <img src="/social-icons/twitter2.svg" alt="" className=" size-4 text-white  " />
            </section>
            <section className="  bg-yellow-500 p-[8px] rounded-full cursor-pointer ">
              <img src="/social-icons/email.svg" alt="" className=" size-6 text-white  " />
            </section>
            <section className="  bg-green-700 p-[10px] rounded-full cursor-pointer ">
              <img src="/social-icons/whatsapp.svg" alt="" className=" size-5 text-white  " />
            </section>
          </div>

          <button className="  flex items-center justify-center gap-2 px-10 py-3 font-medium bg-zinc-200 dark:bg-zinc-900 outline-none rounded-md mt-5 ">
            <ShoppingBasket size={18} className=" text-slate-900 dark:text-slate-200 " />
            Add to Bag
          </button>
        </div>
      </section>

      <section className=" flex flex-col h-fit md:flex-row w-full gap-x-5 mt-8  ">
        {/*  */}

        <div className=" w-full md:w-[40%] shadow-md  flex-col  relative h-fit  flex items-start justify-start bg-white dark:bg-black  py-5 ">
          <h2 className=" text-[1.2rem] font-bold  px-5 ">Rating</h2>

          <div className=" flex items-start justify-start dark:py-2  gap-2  w-full mt-3 dark:bg-zinc-800  px-5 ">
            <Rating name="read-only" value={4} readOnly />
            <p className=" font-medium  ">Based on 2 Reviews.</p>
          </div>

          <div className=" px-5  w-full my-3">
            <div className=" border-2 border-black/10 dark:border-white/10 w-full " />
          </div>

          <section className=" flex flex-col gap-y-3 px-5 w-full ">
            <ReviewList star="5" percent="w-[51%]" per="21" color="bg-green-600" />
            <ReviewList star="4" percent="w-[19%]" per="20" color="bg-blue-400" />
            <ReviewList star="3" percent="w-[31%]" per="10" color="bg-yellow-400" />
            <ReviewList star="2" percent="w-[18%]" per="20" color="bg-orange-400" />
            <ReviewList star="1" percent="w-[89%]" per="40" color="bg-red-400" />
          </section>
        </div>

        {/*  */}

        <div className=" flex-1 flex flex-col gap-y-5 mt-5 md:mt-0 ">
          <section className="  flex-col flex items-center justify-center h-fit  gap-y-3 ">
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
          </section>

          <section className=" w-full bg-white dark:bg-black p-5 flex-col ">
            <p className=" text-[1.1rem] font-semibold "> Add Review</p>

            <p className=" mt-5">Title</p>
            <input type="text" placeholder="Enter review title" className=" outline-none dark:bg-black border-[0.1px] mt-1 px-2 py-2 w-full " />
            <p className=" mt-5">Comment</p>
            <textarea rows={3} className=" border-[0.1px] mt-1 px-2 py-2 w-full outline-none dark:bg-black " placeholder="Write review"></textarea>

            <div className=" w-full dark:bg-zinc-800 flex items-center  gap-x-5 dark:px-2 mt-3  py-1 ">
              <p className="">Review</p>
              <Rating
                size="large"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>

            <button className=" mt-10 px-10 py-3 border-[0.1px] font-medium tracking-widest ">Publish Review</button>
          </section>
        </div>

        {/*  */}
      </section>

      {/*  */}
    </main>
  );
};

export default ProductView;
