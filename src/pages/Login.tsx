import {Link} from "react-router-dom";

const Login = () => {
  return (
    <main className="  px-5 md:px-20 my-8  ">
      <p className=" text-[1.2rem] font-semibold pb-5 border-b-[0.1px] ">Login</p>

      <div className=" mt-8 grid  grid-cols-1 md:grid-cols-2   ">
        <form className=" text-left">
          <p className="  font-normal ">Email Address</p>
          <input type="text" name="email" placeholder="Please Enter your email" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />

          <p className="  font-normal mt-3 ">Password</p>
          <input type="password" name="password" placeholder="Please Enter your password" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />
        </form>

        <section className=" w-full flex items-center   mt-5 md:mt-0   flex-col gap-y-5 justify-center ">
          <div className=" cursor-pointer flex items-center justify-center  border-[0.1px]  gap-5 w-full md:w-fit  md:px-20 py-3">
            <img src="/social-icons/google.png" alt="google" className=" size-10 " />
            <p className=" tracking-widest  ">Login with Google</p>
          </div>
          <div className=" cursor-not-allowed flex items-center justify-center  border-[0.1px]  gap-5 w-full md:w-fit md:px-20 py-3">
            <img src="/social-icons/github.png" alt="google" className=" size-10 " />
            <p className=" tracking-widest  ">Login with Github</p>
          </div>
        </section>
      </div>

      {/*  */}
      <div className=" flex items-center w-full justify-center  md:justify-start mt-10">
        <button type="submit" className=" px-10 text-white py-3 bg-blue-500 hover:bg-blue-600 ease-in-out duration-150 ">
          Login
        </button>
        <Link to="/register">
          <button className=" px-10 py-3 ease-in-out duration-150 ">Create an account</button>
        </Link>
      </div>
    </main>
  );
};

export default Login;
