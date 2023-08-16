import type { NextPage } from "next";
import Button from "./button";

const ProjectsAndPartnersContainer: NextPage = () => {
  return (
    <div className="absolute top-[2792px] left-[171px] w-[1170px] h-[700px] text-right text-xl text-black font-semibold-11">
      <Button
        ctaText="Let’s Talk"
        buttonPosition="absolute"
        buttonTop="642px"
        buttonLeft="495px"
        letsTalkLeft="28.89%"
      />
      <div className="absolute top-[141px] left-[800px] w-[370px] flex flex-col items-center justify-start gap-[26px]">
        <div className="self-stretch bg-ghostwhite flex flex-col pt-6 px-6 pb-0 items-start justify-end">
          <div className="self-stretch relative bg-black shadow-[0px_0px_20px_rgba(0,_0,_0,_0.06)] h-[324px]" />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[337px] shrink-0 object-cover mt-[-324px]"
            alt=""
            src="/rectangle-28@2x.png"
          />
        </div>
        <div className="self-stretch h-8 flex flex-row items-center justify-end gap-[21px]">
          <div className="relative leading-[32px] font-semibold flex items-center w-[154px] shrink-0">
            In-House Brand
          </div>
          <img
            className="relative w-[13.8px] h-[13.8px]"
            alt=""
            src="/arrow1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[141px] left-[400px] w-[370px] flex flex-col items-center justify-start gap-[26px]">
        <div className="self-stretch bg-ghostwhite flex flex-col pt-6 px-6 pb-0 items-start justify-end">
          <div className="self-stretch relative bg-black shadow-[0px_0px_20px_rgba(0,_0,_0,_0.06)] h-[324px]" />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[337px] shrink-0 object-cover mt-[-324px]"
            alt=""
            src="/rectangle-28@2x.png"
          />
        </div>
        <div className="self-stretch h-8 flex flex-row items-center justify-end gap-[21px]">
          <div className="relative leading-[32px] font-semibold flex items-center w-[170px] shrink-0">
            E-Learning Portal
          </div>
          <img
            className="relative w-[13.8px] h-[13.8px]"
            alt=""
            src="/arrow1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[128px] left-[0px] w-[370px] flex flex-col items-center justify-start gap-[39px] text-left">
        <div className="self-stretch bg-ghostwhite flex flex-col pt-6 px-6 pb-0 items-start justify-end">
          <div className="self-stretch relative bg-black shadow-[0px_0px_20px_rgba(0,_0,_0,_0.06)] h-[324px]" />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[337px] shrink-0 object-cover mt-[-324px]"
            alt=""
            src="/rectangle-28@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="relative leading-[32px] font-semibold flex items-center w-[223px] shrink-0">
            Online Electronic Store
          </div>
          <img
            className="relative w-[13.8px] h-[13.8px]"
            alt=""
            src="/arrow1.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[5px] left-[1060px] w-[110px] h-[50px]"
        alt=""
        src="/arrows.svg"
      />
      <div className="absolute top-[0px] left-[0px] text-21xl leading-[52px] font-semibold text-center flex items-center justify-center w-[378px]">{`Projects & Partners`}</div>
    </div>
  );
};

export default ProjectsAndPartnersContainer;
