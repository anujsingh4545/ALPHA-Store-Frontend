import {X} from "lucide-react";

const NavbarSidePanel = ({showpanel, togglepanel}: any) => {
  return (
    <>
      <section className={` z-40 fixed top-0  w-[290px] sm:w-[320px] bg-gray-100 h-[100dvh] shadow-sm ${showpanel ? "left-0" : "left-[-500px] "} ease-in-out duration-300  `}>
        <div className=" flex items-end justify-end px-3 py-4  border-b-[0.1px] dark:border-gray-300 ">
          <X size={24} className=" cursor-pointer dark:text-black " onClick={togglepanel} />
        </div>

        <div className=" flex flex-col justify-start items-start px-2 py-5 gap-y-4 dark:text-black ">
          <h1 className=" w-full text-left font-semibold  text-[1rem] pl-8 ">Shop By Category</h1>
          <div className=" w-full ">
            <p className="navside1">Bags</p>
            <p className=" navside1 ">Mens</p>
            <p className=" navside1 ">Womens</p>
            <p className=" navside1 ">Shoes</p>
            <p className=" navside1 ">Perfumes</p>
          </div>
        </div>
      </section>

      {showpanel && <section className=" z-20 fixed top-0 left-0 w-[100%] bg-[#b1afaf18] cursor-pointer flex-1 h-[100dvh]" onClick={togglepanel}></section>}
    </>
  );
};

export default NavbarSidePanel;
