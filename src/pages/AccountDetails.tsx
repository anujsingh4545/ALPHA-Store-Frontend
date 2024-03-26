import BasicSkelton1 from "@/Common/Skelton/BasicSkelton1";
import BasicSkelton2 from "@/Common/Skelton/BasicSkelton2";
import UserAtom from "@/Recoil/UserAtoms/UserAtom";
import {useRecoilValue} from "recoil";

const AccountDetails = () => {
  const user: any = useRecoilValue(UserAtom);

  return (
    <main className="  w-full  h-full flex flex-col ">
      <h1 className="  w-full border-b-[0.1px] pb-3 text-[1.1rem]  tracking-widest font-semibold  text-gray-800 dark:text-white/95">Account Details</h1>

      {user.loading ? (
        <BasicSkelton2 count={10} height={4} gap={5} />
      ) : (
        <div className=" flex flex-col items-center justify-center w-full gap-y-4 mt-5 ">
          <section className=" w-full  flex gap-3 items-center text-[0.9rem] ">
            <p className=" tracking-wider">Logged in with {user.user.loginMedium}</p>
            <p className=" tracking-wider px-5 py-2 bg-gray-100 dark:bg-gray-900 ">Admin</p>
          </section>

          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>Name</p>
            <input type="text" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder={user.user.name} />
          </section>
          <section className="flex flex-col gap-y-1  w-full justify-center mt-1 tracking-wider">
            <p>Phone Number</p>

            <input type="number" className=" outline-none tracking-wider text-[0.8rem] w-full border-[0.1px]  px-2 py-3 dark:bg-black " placeholder="Please enter your phone number" />
          </section>

          <section className=" border-t-[0.1px] w-full pt-5 mt-3 ">
            <button className=" border-[0.1px] px-10 py-3  ">Save Changes</button>
          </section>
        </div>
      )}
    </main>
  );
};

export default AccountDetails;
