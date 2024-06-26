import {useEffect, useState} from "react";
import {ChevronDown, Menu, ShoppingCart} from "lucide-react";
import NavbarSidePanel from "./NavbarSidePanel";
import {Link} from "react-router-dom";
import OrderPanel from "./OrderPanel";
import {useRecoilState} from "recoil";
import UserAtom from "@/Recoil/UserAtoms/UserAtom";
import BasicSkelton1 from "../Skelton/BasicSkelton1";
import {removeFromSession} from "../Session/Session";
import toast from "react-hot-toast";
import RefreshUser from "@/Recoil/UserAtoms/RefreshUser";

const Navbar2Panel = () => {
  const [showBrand, setShowBrand] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [orderPanel, setOrderPanel] = useState(false);
  const [user, setUser]: any = useRecoilState(UserAtom);
  const [refreshUser, setRefreshUser] = useRecoilState(RefreshUser);
  let username: any = user?.user?.name.split(" ");

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (showBrand) {
        const brandSection = document.getElementById("brandSection");
        if (brandSection && !brandSection.contains(event.target)) {
          setShowBrand(false);
        }
      }
      if (showWelcome) {
        const welcomeSection = document.getElementById("welcomeSection");
        if (welcomeSection && !welcomeSection.contains(event.target)) {
          setShowWelcome(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBrand, showWelcome]);

  const toggleSidePanel = () => {
    setShowSidePanel(false);
  };

  const tooggleOrderPanel = () => {
    setOrderPanel(false);
  };

  const signoutuser = () => {
    removeFromSession("token");
    setUser((l: any) => ({
      user: null,
      ...l,
    }));
    setRefreshUser(!refreshUser);

    toast.success("Successfully logged out!");
  };

  return (
    <main className="border-b-[0.1px] px-5 md:px-20 flex justify-between items-center flex-col md:flex-row py-4 gap-y-3">
      {/*  */}
      <section className="w-full md:w-fit justify-between md:justify-center flex items-center gap-5 order-1 ">
        <Menu size={28} className="cursor-pointer hidden md:flex " onClick={() => setShowSidePanel(!showSidePanel)} />

        <Link to="/" className="w-full ">
          <p className="font-anta font-semibold text-[1.2rem] text-center w-full">ALPHA Store</p>
        </Link>
      </section>

      <NavbarSidePanel togglepanel={toggleSidePanel} showpanel={showSidePanel} />

      <section className="w-full md:w-fit justify-between md:hidden flex items-center gap-5 order-1 ">
        <Menu size={22} className="cursor-pointer " onClick={() => setShowSidePanel(!showSidePanel)} />

        {/*  */}
        <div className=" relative cursor-pointer" onClick={() => setOrderPanel(!orderPanel)}>
          <ShoppingCart size={22} className="cursor-pointer " />
          <p className=" animate-bounce absolute bottom-3 left-4   rounded-full bg-blue-500 h-4  w-4 text-[0.6rem] flex items-center justify-center text-white ">1</p>
        </div>
      </section>

      
      <OrderPanel toggleOrder={tooggleOrderPanel} showorder={orderPanel} />

      <section className="order-last md:order-2 w-full md:w-[30%] lg:w-[40%] ">
        <input type="text" className="w-full rounded-md border-[0.1px] text-[0.9rem] px-4 py-3 bg-transparent outline-none " placeholder="Search Products" />
      </section>

      <section className="   flex items-center justify-between flex-row gap-6 md:gap-4 order-3">
        <div className=" hidden md:flex relative cursor-pointer " onClick={() => setOrderPanel(!orderPanel)}>
          <ShoppingCart size={22} className=" mr-5 cursor-pointer  " />
          <p className=" animate-bounce absolute bottom-3 right-3   rounded-full bg-blue-500 h-4  w-4 text-[0.6rem] flex items-center justify-center text-white ">1</p>
        </div>

        <div className="relative" id="brandSection">
          <p className="text-[0.9rem] flex items-end justify-center cursor-pointer " onClick={() => setShowBrand(!showBrand)}>
            Brands <ChevronDown size={16} className={`ml-1 cursor-pointer duration-100 ease-in-out ${showBrand ? "rotate-180" : " rotate-0 "} `} />
          </p>

          {showBrand && (
            <div className=" px-5 py-3  z-10 md:px-10 md:py-5 flex items-center flex-col justify-center ease-in-out duration-150 absolute bottom-[1] mt-4 rounded-sm shadow-xl dark:shadow-sm  dark:bg-black dark:shadow-gray-700 left-[-5px] md:left-auto md:right-0 w-[250px] md:w-[400px] bg-white">
              <section className="flex items-center w-full justify-between border-b-[0.1px] pb-2">
                <p className="font-semibold text-[1rem] md:text-[1.1rem] tracking-widest">SHOP BY BRAND</p>
                <Link to="/shop/brands">
                  <p className=" text-[0.8rem] md:text-[0.9rem] text-blue-500 font-semibold cursor-pointer ">See All</p>
                </Link>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 w-full text-left mt-2 md:mt-5 gap-y-3 text-[0.9rem] transform">
                <p className="nav1">Converse</p>
                <p className="nav1">Calvin Klein</p>
                <p className="nav1">Nike</p>
                <p className="nav1">Apple</p>
                <p className="nav1">Gucci</p>
                <p className="nav1">Polo</p>
                <p className="nav1">Ralph Lauren</p>
                <p className="nav1">Tommy Hilfiger</p>
              </section>
            </div>
          )}
        </div>

        <Link to="/shop">
          <p className="text-[0.9rem] cursor-pointer ">Shop</p>
        </Link>

        {user.loading ? (
          <BasicSkelton1 count={2} />
        ) : (
          <div className=" relative " id="welcomeSection">
            <p className="text-[0.9rem] flex items-end justify-center cursor-pointer " onClick={() => setShowWelcome(!showWelcome)}>
              {user.user ? username[0] : "Welcome!"} <ChevronDown size={16} className={`ml-1 cursor-pointer duration-100 ease-in-out ${showWelcome ? "rotate-180" : " rotate-0 "} `} />
            </p>

            {showWelcome && (
              <div className="px-2 py-2 flex  flex-col justify-center ease-in-out duration-150 absolute bottom-[1] mt-4 rounded-sm shadow-xl dark:shadow-sm  dark:bg-black dark:shadow-gray-700 right-0 w-[120px] bg-white ">
                {user.user ? (
                  <>
                    <Link to="/dashboard/account">
                      <p className=" nav2 " onClick={() => setShowWelcome(false)}>
                        Dashboard
                      </p>
                    </Link>

                    <p
                      className=" nav2"
                      onClick={() => {
                        setShowWelcome(false);
                        signoutuser();
                      }}
                    >
                      Sign out
                    </p>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <p className=" nav2 " onClick={() => setShowWelcome(false)}>
                        Login
                      </p>
                    </Link>

                    <Link to="/register">
                      <p className=" nav2" onClick={() => setShowWelcome(false)}>
                        Register
                      </p>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default Navbar2Panel;
