import {useTheme} from "@/components/Theme/theme-provider";

const BasicSkelton1 = ({count}: {count: Number}) => {
  const {theme} = useTheme();

  return (
    <div className=" w-full min-w-20 flex flex-col gap-y-2  ">
      {[...Array(Number(count)).keys()].map((index) => (
        <section key={index} className={`h-2 rounded-full animate-pulse ${theme == "dark" ? "bg-white/10" : "bg-black/10"}`} />
      ))}
    </div>
  );
};

export default BasicSkelton1;
