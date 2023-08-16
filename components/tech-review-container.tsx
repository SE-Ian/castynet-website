import type { NextPage } from "next";

const TechReviewContainer: NextPage = () => {
  return (
    <div className="absolute top-[3642px] left-[171px] w-[1170px] h-[502px] text-left text-mid text-white font-bold-2">
      <img
        className="absolute top-[0px] left-[0px] w-[1170px] h-[502px]"
        alt=""
        src="/bg6.svg"
      />
      <div className="absolute top-[374px] left-[170px] w-[275px] h-7">
        <img
          className="absolute top-[8.1px] left-[262.1px] w-[13.8px] h-[13.8px]"
          alt=""
          src="/arrow.svg"
        />
        <b className="absolute top-[1px] left-[40px] leading-[25px]">
          Rated at 5 on Google
        </b>
        <img
          className="absolute top-[6px] left-[134px] w-[18px] h-[17px]"
          alt=""
          src="/star-icon.svg"
        />
        <b className="absolute top-[0px] left-[0px] text-7xl leading-[28px] font-plus-jakarta-sans text-black">
          👍🏼
        </b>
      </div>
      <div className="absolute top-[217px] left-[170px] text-11xl leading-[40px] font-semibold-11 flex items-center w-[700px] h-[108px]">
        “ We are high spirited geeks passionate about tech. Our mission is to
        create. ”
      </div>
      <img
        className="absolute top-[153px] left-[290px] w-[113px] h-5"
        alt=""
        src="/stars.svg"
      />
      <div className="absolute top-[116px] left-[290px] text-xl leading-[32px] font-semibold flex items-center w-[149px]">
        Brayden Miller
      </div>
      <img
        className="absolute top-[100px] left-[170px] rounded-[50%] w-[90px] h-[90px] object-cover"
        alt=""
        src="/image@2x.png"
      />
    </div>
  );
};

export default TechReviewContainer;
