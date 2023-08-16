import type { NextPage } from "next";
import Button from "./button";

const SoftwareStudioHeroBannerContai: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1512px] h-[850px] text-center text-71xl text-white font-semibold-11">
      <img
        className="absolute top-[0px] left-[0px] w-[1512px] h-[850px]"
        alt=""
        src="/bg7.svg"
      />
      <Button
        ctaText="Let’s Talk"
        buttonPosition="absolute"
        buttonTop="553px"
        buttonLeft="666px"
        letsTalkLeft="28.89%"
      />
      <div className="absolute top-[240px] left-[371px] w-[771px] flex flex-col items-center justify-start gap-[20px]">
        <div className="self-stretch relative leading-[106px] font-semibold">
          <p className="m-0">{`we are a software `}</p>
          <p className="m-0">studio.</p>
        </div>
        <div className="self-stretch relative text-xl leading-[32px] font-semibold font-bold-2">{`Focused on creating elegant, modern  & functional apps.`}</div>
      </div>
    </div>
  );
};

export default SoftwareStudioHeroBannerContai;
