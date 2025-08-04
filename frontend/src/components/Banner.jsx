import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaGithubSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { Link } from "react-router-dom";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Coder.",
      "Problem Solver .",
      "MERN Stack Developer.",
      "Gen AI Enthusiast.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const Media = () => (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <Link
              to={"https://www.facebook.com/profile.php?id=100088985135162"}
              target="_blank"
            >
              {" "}
              <FaFacebookF />
            </Link>
          </span>
          <span className="bannerIcon">
            <Link to={"https://github.com/probin-dhakal"} target="_blank">
              {" "}
              <FaGithubSquare />
            </Link>
          </span>
          <span className="bannerIcon">
            <Link
              to={"https://www.linkedin.com/in/probin-dhakal-1306092b5/"}
              target="_blank"
            >
              {" "}
              <FaLinkedinIn />
            </Link>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <IoLogoNodejs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );

  const LeftBanner = () => (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Probin</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a passionate MERN Stack Developer, I specialize in building
          seamless, scalable, and user-focused web applications. With a deep
          enthusiasm for Generative AI, I thrive on exploring cutting-edge
          technologies to create innovative solutions. Beyond coding, I’m a
          dedicated problem solver who enjoys tackling complex challenges and
          transforming ideas into impactful digital experiences.
        </p>
      </div>
      <Media />
    </div>
  );

  const RightBanner = () => (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src="/logo1.jpeg"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
