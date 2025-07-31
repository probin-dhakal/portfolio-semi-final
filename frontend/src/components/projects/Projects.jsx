import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="NeuroSphere (Full Stack Developer)"
          des="Led React frontend development and built custom Django APIs for a neurodiversity support platform. Integrated accessibility tools and gamified wellness tools (breathing app, PDF converter, SOS alert). Collaborated on ML modules for podcast generation, mind mapping, and sentiment analysis."
          githubLink="https://github.com/bignya23/NeuroSphere.git"
          liveLink="https://neurosphere.support/"
        />
        <ProjectsCard
          title="Tamul AI (AI-driven podcast agent)"
          des="Developed AI-driven podcast agent enabling interactive text-to-audio conversations with multilingual support (6+ languages). Integrated WebSocket-based audio/text streaming with Django backend for podcast generation, voice recording (STT), and live participation. Optimized audio queues and WebSocket connections gained 400+ users within 2 days of release."
          githubLink="https://github.com/bignya23/tamul-ai.git"
          liveLink="https://www.tamulai.in/"
        />
        <ProjectsCard
          title="Virtual AI Assistant (Full Stack Developer)"
          des="Built a voice-enabled virtual assistant with user authentication, avatar, and name customization. Integrated Google Gemini AI to process 10+ natural language command types including time queries and searches. Implemented JWT-based auth with bcrypt hashing; optimized backend scalability with MongoDB indexing. Deployed with Cloudinary CDN integration and React memoization for smooth UI performance."
          githubLink="https://github.com/probin-dhakal/VirtualAssistant.git"
          liveLink="https://virtual-assistant-theta-seven.vercel.app/"
        />
        <ProjectsCard
          title="AI Chat bot - Genai"
          des=" An AI-powered chatbot built with the MERN stack, featuring secure authentication and chat storage in a database. Leveraging the Google Gemini API for cutting-edge generative AI capabilities, it provides intelligent and engaging conversational experiences."
          githubLink="https://github.com/probin-dhakal/ai-chatbot-GenieAI.git"
          liveLink="https://ai-chatbot-genieai-frontend.onrender.com"

        />
        <ProjectsCard
          title="A time capsule website -Samayyatra"
          des=" A MERN-based Time Capsule platform with authentication, OTP-based password recovery, and capsule creation. Features include scheduling opening dates, sending messages, 5-day prior reminders, and capsule deletion for a personalized and secure experience."
          githubLink="https://github.com/probin-dhakal/samayyatra.git"
          liveLink="https://samayyatra-1.onrender.com/"

        />
        <ProjectsCard
          title="A blog website"
          des=" A blog website built with MERN stack, featuring full CRUD functionality. Users can create, update, delete, and manage blogs seamlessly, providing an intuitive platform for sharing and managing content effortlessly."
          githubLink="https://github.com/probin-dhakal/FinalBlog.git"
          liveLink=""

        />
        <ProjectsCard
          title="AN AI Sales Agent"
          des=" The `AI Phone Agent` handles cold calls and sales using AI, incorporating speech-to-text (STT), text-to-speech (TTS), and large language models (LLMs). It processes user inputs, generates responses, handles tasks like scheduling, and allows real-time voice recording and interaction with AI."
          githubLink="https://github.com/bignya23/ai-phone-agent"
          liveLink="https://ai-phone-agent-1.onrender.com/"

        />
        <ProjectsCard
          title="Freelanced Portfolio Website"
          des=" A frontend freelance portfolio website built with React, utilizing hooks for state management. It features dynamic navigation, project showcase, contact form, and a theme toggle, offering a professional and interactive user experience."
          liveLink="https://www.bibekdhakal.in/"

        />
      </div>
    </section>
  );
};

export default Projects;
