import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "./layouts/Title";
// import Title from "../layouts/Title";

const ResumeCard = ({ title, subTitle, result, des }) => (
  <div className="w-full h-1/3 group flex">
    <div className="w-10 h-[6px] bgOpacity mt-16 relative">
      <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
        <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
      </span>
    </div>
    <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
            {title}
          </h3>
          <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
            {subTitle}
          </p>
        </div>
        <div>
          <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
            {result}
          </p>
        </div>
      </div>
      <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
        {des}
      </p>
    </div>
  </div>
);
const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  // Previous code remains the same...
  const SkillBar = ({ skill, percentage }) => (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{skill}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
          style={{ width: `${percentage}%` }} // Set width dynamically here
        >
          <span className="absolute -top-7 right-0">{percentage}%</span>
        </motion.span>
      </span>
    </div>
  );
  

  const Education = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020-Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electronics and Communication"
            subTitle="National Institute of Technology, Silchar (2023-Present)"
            result="8.5/10 (CGPA)"
            des="B.Tech ECE student passionate about electronics, communication, programming, innovation, and solving real-world challenges."
          />
          <ResumeCard
            title="AHSEC"
            subTitle="Utopian Academy (2020 - 2022)"
            result="87.2%"
            des="Successfully completed my 12th grade in PCMB with 87.2%, showcasing a strong foundation in science and academics."
          />
        </div>
      </div>
    </motion.div>
  );

  const Skills = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Frontend Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="HTML 5" percentage={95} />
          <SkillBar skill="CSS" percentage={75} />
          <SkillBar skill="Javascript" percentage={80} />
          <SkillBar skill="React" percentage={80} />
          <SkillBar skill="Tailwind CSS" percentage={75} />
          <SkillBar skill="Bootstrap" percentage={90} />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Backend Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="Node.js" percentage={50} />
          <SkillBar skill="Express" percentage={80} />
          <SkillBar skill="Mongodb" percentage={50} />
          <SkillBar skill="Authentication & Authorization" percentage={90} />
          <SkillBar skill="Deployment" percentage={70} />
          <SkillBar skill="Django" percentage={70} />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Other Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="C" percentage={50} />
          <SkillBar skill="C++" percentage={85} />
          <SkillBar skill="Generative AI" percentage={60} />
          <SkillBar skill="Python" percentage={50} />
          <SkillBar skill="Github" percentage={80} />
          <SkillBar skill="Google Cloud" percentage={80} />
          <SkillBar skill="VS Code" percentage={80} />
        </div>
      </div>
    </motion.div>
  );

  const Experience = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 - Present</p>
          <h2 className="text-4xl font-bold">Position of Responsibility</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Team Member"
            subTitle="IEEE Robotics and Automation Society (Apr 2025 – Present)"
            result="NIT Silchar"
            des="Actively contribute to technical projects and initiatives within the IEEE Robotics and Automation Society."
          />
          <ResumeCard
            title="Technical Team Member"
            subTitle="ECO Club, NIT Silchar (May 2025 – Present)"
            result="NIT Silchar"
            des="Organized GreenX, a campus-wide sustainability hackathon with 30+ teams promoting eco-tech solutions."
          />
        </div>
      </div>
    </motion.div>
  );

  const Achievement = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Winner, Neurathon 2025"
            subTitle="NIT Silchar"
            result="Winner"
            des="Built Debate Partner (AI debate app) and CALL.E (bulk voice agent) using LLaMA, Flask, Gemini LLM."
          />
          <ResumeCard
            title="Winner, Drone Innovation Challenge"
            subTitle="Fire Surveillance Drone"
            result="Winner"
            des="Designed a smart drone using LoRa, methane sensors, and onboard ML for early fire detection."
          />
          <ResumeCard
            title="Finalist, Google Cloud Agentic AI Hackathon"
            subTitle="Top 50 Student Teams"
            result="Finalist"
            des="Selected among Top 50 student teams out of 700 total (650 professional + 50 student teams)."
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {["education", "skills", "experience", "achievement"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-10">
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "achievement" && <Achievement />}
      </div>
    </section>
  );
};

export default Resume;
