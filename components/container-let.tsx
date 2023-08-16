import type { NextPage } from "next";
import Button from "./button";

const ContainerLet: NextPage = () => {
  return (
    <div className="absolute top-[5212px] left-[371px] w-[770px] h-[643px] text-center text-mid text-black font-bold-2">
      <Button
        ctaText="Submit"
        buttonPosition="absolute"
        buttonTop="585px"
        buttonLeft="295px"
        letsTalkLeft="33.89%"
      />
      <div className="absolute top-[427px] left-[0px] w-[770px] flex flex-col items-center justify-start gap-[48px]">
        <div className="self-stretch relative leading-[32px] font-semibold">
          Message *
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-black" />
      </div>
      <div className="absolute top-[351px] left-[0px] w-[770px] h-[50px] text-left">
        <div className="absolute top-[49.5px] left-[-0.5px] box-border w-[771px] h-px border-t-[1px] border-solid border-black" />
        <img
          className="absolute top-[24.2px] left-[759.2px] w-[11.6px] h-[6.6px]"
          alt=""
          src="/arrow-2.svg"
        />
        <div className="absolute top-[0px] left-[0px] leading-[32px] font-semibold flex items-center w-[770px] h-[50px]">
          What kind of app are you interested in?
        </div>
      </div>
      <div className="absolute top-[275px] left-[400px] w-[370px] flex flex-col items-center justify-start">
        <div className="self-stretch relative leading-[32px] font-semibold">
          Email Address *
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-black" />
      </div>
      <div className="absolute top-[275px] left-[0px] w-[370px] flex flex-col items-center justify-start">
        <div className="self-stretch relative leading-[32px] font-semibold">
          Your Name *
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-black" />
      </div>
      <div className="absolute top-[0px] left-[47px] text-71xl leading-[106px] font-semibold font-semibold-11">
        <p className="m-0">{`Have a project? `}</p>
        <p className="m-0">Let’s talk.</p>
      </div>
    </div>
  );
};

export default ContainerLet;
