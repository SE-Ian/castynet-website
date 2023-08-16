import type { NextPage } from "next";

const VerticalSkroll: NextPage = () => {
  return (
    <div className="relative w-[3px] h-[230px]">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-lightgrey" />
      <div className="absolute h-[34.78%] w-full top-[0%] right-[0%] bottom-[65.22%] left-[0%] rounded-sm bg-black" />
    </div>
  );
};

export default VerticalSkroll;
