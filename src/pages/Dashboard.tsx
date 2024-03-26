import NavDashBoard from "@/Recoil/DashBoardAtoms/NavDashBoard";
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {useRecoilState} from "recoil";

const Dashboard = () => {
  const [navDash, setNavDash] = useRecoilState(NavDashBoard);

  const [menu, setMenu] = useState(true);
  return (
    <main className="  px-5 md:px-20 my-8  w-full  flex gap-x-10 flex-col md:flex-row ">
      <nav className="  w-full md:w-[25%] flex-col items-center justify-center ">
        <p className="  text-gray-700 dark:text-white text-[1rem] tracking-wider font-semibold  border-[0.1px] w-full  text-center py-3 my-1  ">Account</p>
        <Link to="/dashboard">
          <p className={`dash1   ${navDash == "1" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("1")}>
            Account Details
          </p>
        </Link>
        <Link to="/dashboard/address">
          <p className={`dash1  ${navDash == "2" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("2")}>
            Address
          </p>
        </Link>
        <Link to="/dashboard/products">
          <p className={`dash1  ${navDash == "3" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("3")}>
            Products
          </p>
        </Link>
        <Link to="/dashboard/categories">
          <p className={`dash1  ${navDash == "4" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("4")}>
            Categories
          </p>
        </Link>
        <Link to="/dashboard/brands">
          <p className={`dash1  ${navDash == "5" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("5")}>
            Brands
          </p>
        </Link>
        <Link to="/dashboard/merchants">
          <p className={`dash1  ${navDash == "6" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("6")}>
            Merchants
          </p>
        </Link>
        <Link to="/dashboard/requests">
          <p className={`dash1  ${navDash == "7" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("7")}>
            Requests
          </p>
        </Link>
        <Link to="/dashboard/orders ">
          <p className={`dash1  ${navDash == "8" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("8")}>
            Orders
          </p>
        </Link>
        <Link to="/dashboard/wishlist">
          <p className={`dash1  ${navDash == "9" ? "bg-black/10 dark:bg-white/10" : ""} `} onClick={() => setNavDash("9")}>
            Wishlist{" "}
          </p>
        </Link>
      </nav>

      <section className="w-[100%] mt-8 md:mt-0 md:w-[80%] ">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
