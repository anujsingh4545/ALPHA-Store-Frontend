import {Link} from "react-router-dom";

const Footer1 = () => {
  return (
    <main className="  py-5 md:py-8 px-5 md:px-20  flex flex-col items-center w-full  border-t-[0.1px] ">
      <div className=" grid grid-cols-1 md:grid-cols-3 w-full  gap-5 ">
        <section className=" flex flex-col items-start justify-start  border-r-[0.1px] w-full py-2 md:py-5  ">
          <p className=" font-semibold text-[1rem] "> CUSTOMER SERVICE</p>

          <div className=" flex flex-col text-gray-500  gap-y-2 mt-4 text-[0.95rem] ">
            <Link to="/contact">
              <p className=" footer1 ">Contact Us</p>
            </Link>
            <Link to="sell-with-us">
              <p className=" footer1 ">Sell With Us</p>
            </Link>
            <p className=" footer1 ">Shipping</p>
          </div>
        </section>
        <section className=" flex flex-col items-start justify-center  border-r-[0.1px] w-full py-2 md:py-5 ">
          <p className=" font-semibold text-[1rem] "> LINKS</p>

          <div className=" flex flex-col text-gray-500  gap-y-2 mt-4 text-[0.95rem] ">
            <Link to="/contact">
              <p className=" footer1 ">Contact Us</p>
            </Link>
            <Link to="sell-with-us">
              <p className=" footer1 ">Sell With Us</p>
            </Link>
            <p className=" footer1 ">Shipping</p>
          </div>
        </section>
        <section className=" flex flex-col items-start justify-start   w-full  py-2 md:py-5 ">
          <p className=" font-semibold text-[1rem] "> NEWSLETTER</p>

          <p className=" text-[0.95rem] mt-2  text-gray-500"> Sign Up for Our Newsletter</p>

          <div className=" w-full  mt-4 border-[0.1px] flex items-center justify-center ">
            <input type="text" className=" w-full outline-none  dark:text-black  text-[0.8rem] p-3 " placeholder="Please enter your email" />

            <button className=" px-5  h-full text-white bg-blue-500 hover:bg-blue-600 ease-in-out duration-150  border-l-[0.1px] ">Subscribe</button>
          </div>
        </section>
      </div>

      <div className=" mt-8 flex items-center justify-center w-full flex-col ">
        <p>© 2024 ALPHA Store</p>

        <section className=" w-full flex items-center justify-center  mt-5 gap-4  ">
          <a href="www.facebook.com" target="_blank">
            <img src="/social-icons/facebook.svg" alt="facebook" className="footer2" />
          </a>
          <a href="www.instagram.com" target="_blank">
            <img src="/social-icons/instagram.svg" alt=" instagram" className=" footer2 " />
          </a>
          <a href="www.pinterest.com" target="_blank">
            <img src="/social-icons/pinterest.svg" alt="pinterest" className=" footer2 " />
          </a>
          <a href="www.twitter.com" target="_blank">
            <img src="/social-icons/twitter.svg" alt="twitter" className=" footer2 " />
          </a>
        </section>
      </div>
    </main>
  );
};

export default Footer1;
