import {auth} from "@/Common/Firebase/Firebase";
import {SocialAuth} from "@/Common/Firebase/SocialAuth";
import {storeInSession} from "@/Common/Session/Session";
import BasicSkelton1 from "@/Common/Skelton/BasicSkelton1";
import UserAtom from "@/Recoil/UserAtoms/UserAtom";
import axios from "axios";
import {GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";

const Login = () => {
  const emailref: any = useRef();
  const passref: any = useRef();
  const [user, setUser] = useRecoilState(UserAtom);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitUser = async (): Promise<void> => {
    let email = emailref.current.value;
    let password = passref.current.value;
    setLoading(true);
    await axios
      .post("http://localhost:4000/api/v1/user/login", {email: email, password: password})
      .then((response: any) => {
        if (response.data.success) {
          setUser({
            user: response.data.user,
            loading: false,
          });
          storeInSession("token", response.data.token);
          emailref.current.value = "";
          passref.current.value = "";
          navigate("/");
          setLoading(false);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
          setLoading(false);
        }
      })
      .catch((e: any) => {
        console.log(e);
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  const Auths = async (platform: string) => {
    setLoading(true);
    await SocialAuth(platform, "login", setUser, navigate);
    setLoading(false);
  };

  useEffect(() => {
    if (user.loading == false && user.user) {
      navigate("/");
    }
  }, [user]);

  return user.loading ? (
    <div className="  px-5 md:px-20 my-8 ">
      <BasicSkelton1 count={5} />
    </div>
  ) : (
    <main className="  px-5 md:px-20 my-8  ">
      <p className=" text-[1.2rem] font-semibold pb-5 border-b-[0.1px] ">Login</p>

      <div className=" mt-8 grid  grid-cols-1 md:grid-cols-2   ">
        <form className=" text-left">
          <p className="  font-normal ">Email Address</p>
          <input ref={emailref} type="text" name="email" placeholder="Please Enter your email" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />

          <p className="  font-normal mt-3 ">Password</p>
          <input ref={passref} type="password" name="password" placeholder="Please Enter your password" className=" outline-none bg-transparent dark:text-white px-3 py-3 w-full  border-[0.1px] mt-2  " />
        </form>

        <section className=" w-full flex items-center   mt-5 md:mt-0   flex-col gap-y-5 justify-center ">
          <div onClick={() => Auths("google")} className=" cursor-pointer flex items-center justify-center  border-[0.1px]  gap-5 w-full md:w-fit  md:px-20 py-3">
            <img src="/social-icons/google.png" alt="google" className=" size-10 " />
            <p className=" tracking-widest  ">Login with Google</p>
          </div>
          <div onClick={() => Auths("github")} className=" cursor-pointer flex items-center justify-center  border-[0.1px]  gap-5 w-full md:w-fit md:px-20 py-3">
            <img src="/social-icons/github.png" alt="Github" className=" size-10 " />
            <p className=" tracking-widest  ">Login with Github</p>
          </div>
        </section>
      </div>

      {/*  */}
      <div className=" flex items-center w-full justify-center  md:justify-start mt-10">
        {loading ? (
          <button className=" px-10 text-white py-3 bg-blue-500 hover:bg-blue-600 ease-in-out duration-150 ">Loading...</button>
        ) : (
          <button onClick={submitUser} type="submit" className=" px-10 text-white py-3 bg-blue-500 hover:bg-blue-600 ease-in-out duration-150 ">
            Login
          </button>
        )}
        <Link to="/register">
          <button className=" px-10 py-3 ease-in-out duration-150 ">Create an account</button>
        </Link>
      </div>
    </main>
  );
};

export default Login;
