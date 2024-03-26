import {useTheme} from "@/components/Theme/theme-provider";
import {BadgeDollarSign, Car, Moon, Phone, Sun} from "lucide-react";

const NavbarPanel = () => {
  const {setTheme, theme} = useTheme();

  const toggleTheme = () => {
    if (theme == "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <div className=" flex items-center justify-between px-3 md:px-20  text-[0.95rem] bg-[#24292d] dark:bg-white py-2 ">
      <p className="  hidden  md:flex items-center justify-center  text-white font-medium dark:text-black ">
        <Car size={18} className=" mr-2  " /> Free Shipping
      </p>
      <p className=" hidden  md:flex items-center justify-center  text-[0.95rem]  text-white font-medium dark:text-black ">
        <BadgeDollarSign size={18} className=" mr-2 " /> Payment Methods
      </p>
      <p className=" flex items-center justify-center text-[0.95rem]  text-white font-medium  dark:text-black">
        <Phone size={16} className=" mr-2 " /> Call us 951-999-9999
      </p>

      <button className=" flex items-center justify-center gap-4 rounded-full border-[0.11px]  px-3 cursor-pointer py-1 overflow-hidden " onClick={toggleTheme}>
        <p className=" dark:text-black  text-white text-[0.95rem] font-medium  ">Theme</p>

        {theme == "dark" ? <Sun size={18} className=" dark:text-black " /> : <Moon size={18} className=" text-white " />}
      </button>
    </div>
  );
};

export default NavbarPanel;
