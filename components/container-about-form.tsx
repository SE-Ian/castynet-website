import type { NextPage } from "next";

const ContainerAboutForm: NextPage = () => {
  return (
    <div className="absolute top-[750px] left-[171px] w-[1170px] h-[652px] text-left text-mid text-black font-bold-2">
      <img
        className="absolute top-[0px] left-[585px] w-[585px] h-[490px] object-cover"
        alt=""
        src="/image1@2x.png"
      />
      <div className="absolute top-[560px] left-[579px] w-[491px] h-[88px]">
        <img
          className="absolute top-[11px] left-[180px] w-[172px] h-[72px]"
          alt=""
          src="/lines3.svg"
        />
        <div className="absolute top-[1px] left-[399px] w-[92px] h-[87px]">
          <b className="absolute top-[62px] left-[32px] leading-[25px] flex items-center w-[60px]">
            Tweets
          </b>
          <img
            className="absolute top-[64px] left-[0px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="/mditwitter.svg"
          />
          <div className="absolute top-[0px] left-[2px] text-21xl leading-[52px] font-semibold font-semibold-11 flex items-center w-[74px]">
            285
          </div>
        </div>
        <div className="absolute top-[1px] left-[219px] w-[81px] h-[87px]">
          <b className="absolute top-[62px] left-[32px] leading-[25px] flex items-center w-[49px]">
            Peers
          </b>
          <img
            className="absolute top-[64px] left-[0px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="/mdiinstagram.svg"
          />
          <div className="absolute top-[0px] left-[2px] text-21xl leading-[52px] font-semibold font-semibold-11 flex items-center w-[79px]">{`1.6k `}</div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-36 h-[88px]">
          <b className="absolute top-[63px] left-[31px] leading-[25px] flex items-center w-[113px]">
            Lines of Code
          </b>
          <img
            className="absolute top-[66px] left-[1px] w-5 h-[19.52px]"
            alt=""
            src="/git-icon.svg"
          />
          <div className="absolute top-[0px] left-[0px] text-21xl leading-[52px] font-semibold font-semibold-11 flex items-center w-[88px]">{`931k `}</div>
        </div>
      </div>
      <div className="absolute top-[227px] left-[0px] w-[570px] flex flex-col items-start justify-start gap-[38px] text-21xl font-semibold-11">
        <div className="self-stretch relative leading-[52px] font-semibold">
          <p className="m-0">{`Castynet is a team `}</p>
          <p className="m-0">{`of Software Developers `}</p>
          <p className="m-0">based in Nairobi KE.</p>
        </div>
        <div className="self-stretch relative text-lg leading-[28px] font-bold-2">
          <p className="m-0">{`We are high spirited geeks passionate about tech. Our mission is to create Empowering Software. We are powered by coffee, unreal imagination & attention to detail .`}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Whether you are looking to put your boutique online or want a chat forum for your pals, the Castynet Studios will create your app on time & within your budget.`}</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerAboutForm;
