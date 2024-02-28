import {Link} from "react-router-dom";

const Register = () => {
  return (
    <main className="  px-20 my-8  ">
      <p className=" text-[1.2rem] font-semibold pb-5 border-b-[0.1px] ">Register</p>

      <div className=" mt-8 grid  grid-cols-2   ">
        <form className=" text-left">
          <p className="  font-normal ">Name</p>
          <input type="text" name="name" placeholder="Please Enter your name" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />
          <p className="  font-normal mt-3 ">Email Address</p>
          <input type="text" name="email" placeholder="Please Enter your email" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />

          <p className="  font-normal mt-3 ">Password</p>
          <input type="password" name="password" placeholder="Please Enter your password" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />

          <div className=" flex items-center justify-start mt-10">
            <button type="submit" className=" px-10 text-white py-3 bg-blue-500 hover:bg-blue-600 ease-in-out duration-150 ">
              Register
            </button>
            <Link to="/login">
              <button className=" px-10 py-3 ease-in-out duration-150 ">Back to login</button>
            </Link>
          </div>
        </form>

        <section className=" w-full flex items-center  mt-5  flex-col gap-y-5 justify-start ">
          <div className=" cursor-pointer flex items-center justify-center  border-[0.1px]  gap-5 px-20 py-3">
            <img src="/social-icons/google.png" alt="google" className=" size-10 " />
            <p className=" tracking-widest  ">Login with Google</p>
          </div>
          <div className=" cursor-not-allowed flex items-center justify-center  border-[0.1px]  gap-5 px-20 py-3">
            <img src="/social-icons/github.png" alt="google" className=" size-10 " />
            <p className=" tracking-widest  ">Login with Github</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
