import {useTheme} from "@/components/Theme/theme-provider";

const BasicSkelton2 = ({count, height, gap}: {count: Number; height: Number; gap: Number}) => {
  const {theme} = useTheme();

  let heights = height;
  let gaps = gap;

  return (
    <div className=" w-full flex-1 flex items-center justify-center ">
      <div className=" animate-spin  rounded-full size-10 p-8  border-t-2 border-gray-400   "></div>
    </div>
  );
};

export default BasicSkelton2;
