import type { NextPage } from "next";
import Head from "next/head";
import ContainerLet from "../components/container-let";
import WorkProcessContainer from "../components/work-process-container";
import TechReviewContainer from "../components/tech-review-container";
import ProjectsAndPartnersContainer from "../components/projects-and-partners-container";
import ServicesForm from "../components/services-form";
import ContainerAboutForm from "../components/container-about-form";
import SoftwareStudioHeroBannerContai from "../components/software-studio-hero-banner-contai";
import LogoIcon from "../components/logo-icon";
import VerticalSkroll from "../components/vertical-skroll";

const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[6305px] overflow-hidden text-left text-mid text-darkgrey font-bold-2">
      <div className="absolute top-[6005px] left-[0px] w-[1512px] h-[300px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1512px] h-[300px]"
          alt=""
          src="/bg.svg"
        />
        <div className="absolute top-[161px] left-[531px] leading-[24px]">
          © 2018 - 2023 Castynet Studios - Empowering Software.
        </div>
        <img
          className="absolute top-[111px] left-[644px] w-[225px] h-[30px]"
          alt=""
          src="/social-icons.svg"
        />
      </div>
      <ContainerLet />
      <WorkProcessContainer />
      <TechReviewContainer />
      <ProjectsAndPartnersContainer />
      <ServicesForm />
      <ContainerAboutForm />
      <SoftwareStudioHeroBannerContai />
      <div className="absolute top-[20px] left-[171px] w-[1170px] h-[70px] text-right text-base text-orange">
        <div className="absolute top-[69.5px] left-[-0.5px] box-border w-[1171px] h-px border-t-[1px] border-solid border-white" />
        <img
          className="absolute top-[16px] left-[1035px] w-[135px] h-[18px]"
          alt=""
          src="/social-icons1.svg"
        />
        <b className="absolute top-[13px] left-[419px] leading-[24px]">
          <span>Home</span>
          <span className="text-white">
            {" "}
            About Services Projects Process Contact
          </span>
        </b>
        <LogoIcon
          logoIconPosition="absolute"
          logoIconTop="0px"
          logoIconLeft="0px"
        />
      </div>
      <div className="absolute top-[5475px] left-[371px] bg-white shadow-[0px_2px_30px_rgba(0,_0,_0,_0.05)] w-[770px] flex flex-row pt-[13px] px-0.5 pb-3 box-border items-center justify-between">
        <div className="relative leading-[36px] font-semibold flex items-center w-[466px] h-[196px] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`Spirit itself dominion said `}</p>
            <p className="m-0 text-black">Creature bring is every thing</p>
            <p className="m-0">
              Together darkness Seasons image all signs was can't fowl
            </p>
            <p className="m-0">{`Fish, creepeth of which moveth `}</p>
            <p className="m-0">Void may appear open tree</p>
          </span>
        </div>
        <VerticalSkroll />
      </div>
    </div>
  );
};

export default Home;
