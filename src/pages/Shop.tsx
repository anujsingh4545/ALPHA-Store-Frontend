import ProductList from "@/components/Shop/ProductList";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {useState} from "react";
const Shop = () => {
  const [value, setValue] = useState<number[]>([10, 1000]);
  const [rating, setRating] = useState<number[]>([1, 5]);

  const price = [
    {
      value: 10,
      label: "🪙10",
    },

    {
      value: 1000,
      label: "🪙1000",
    },
  ];

  const ratings = [
    {
      value: 1,
      label: "1⭐",
    },
    {
      value: 2,
      label: "2⭐",
    },
    {
      value: 3,
      label: "3⭐",
    },
    {
      value: 4,
      label: "4⭐",
    },
    {
      value: 5,
      label: "5⭐",
    },
  ];

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <main className="  px-5 md:px-20 py-5  bg-black/5 dark:bg-white/5 ">
      <div className=" w-full flex  h-full flex-col lg:flex-row items-start justify-center  lg:gap-x-10 ">
        {/*  */}

        <section className=" w-full  lg:w-[23.4%]  gap-y-4   flex flex-col items-center justify-center ">
          {/*  */}

          <div className=" flex flex-col w-full  items-center justify-center ">
            <p className=" w-full px-5 text-[1rem] tracking-wider border-gray-300 dark:border-gray-800 rounded-t-md py-2 font-anta font-semibold border-[0.1px] ">Price</p>

            <section className=" bg-white dark:border-gray-800 px-8 py-2 w-full border-[0.1px] rounded-b-md  border-gray-300 ">
              <Box>
                <Slider aria-label="Always visible" value={value} onChange={handleChange} valueLabelDisplay="auto" min={10} max={1000} marks={price} />
              </Box>
            </section>
          </div>

          {/*  */}
          <div className=" flex flex-col w-full  items-center justify-center ">
            <p className=" w-full px-5 text-[1rem] tracking-wider border-gray-300 dark:border-gray-800 rounded-t-md py-2 font-anta font-semibold border-[0.1px] ">Rating</p>

            <section className=" bg-white dark:border-gray-800 px-8 py-2 w-full border-[0.1px] rounded-b-md  border-gray-300 ">
              <Box>
                <Slider aria-label="Always visible" value={rating} valueLabelDisplay="auto" step={1} min={1} max={5} marks={ratings} />
              </Box>
            </section>
          </div>

          {/*  */}
        </section>

        {/*  */}
        <section className="  flex flex-1 w-full h-full flex-col  mt-3 lg:mt-0 ">
          {/*  */}

          <div className=" w-full  flex flex-col md:flex-row items-center justify-between  px-5 py-3 bg-white dark:bg-black shadow-md rounded-md  ">
            <p className=" font-medium tracking-widest ">
              Showing: <span className=" font-normal text-gray-700 dark:text-gray-400 tracking-wider ">1-10 products of 11 products</span>
            </p>

            <section className="  flex gap-4 items-center  justify-center w-full md:w-fit   ">
              <p className=" hidden md:flex font-medium ">Sort By</p>

              <select name="" id="" className="  w-full md:w-fit mt-2 md:mt-0 tracking-widest border-[0.1px] py-2 px-2 dark:bg-black outline-none rounded-md ">
                <option value="newest">Newest First</option>
                <option value="hith-to-low">Price High to Low</option>
                <option value="low-to-high">Price Low to High</option>
              </select>
            </section>
          </div>

          {/* Products section */}

          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-x-3 gap-y-3  items-center justify-center">
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
          </div>

          {/*  */}
        </section>
      </div>
    </main>
  );
};

export default Shop;
