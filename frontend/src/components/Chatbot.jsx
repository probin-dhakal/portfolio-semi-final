import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const botResponses = {
  initial: "Hello! I'm Probin's AI assistant. Ask me a quick question or open the full chat for more!",
  projects: {
    title: "Probin's Projects:",
    items: [
      {
        name: "NeuroSphere (Full Stack Developer)",
        description: "Led React frontend development and built custom Django APIs for a neurodiversity support platform. Integrated accessibility tools and gamified wellness tools (breathing app, PDF converter, SOS alert). Collaborated on ML modules for podcast generation, mind mapping, and sentiment analysis.",
        github: "https://github.com/bignya23/NeuroSphere.git",
        live: "https://neurosphere.support/"
      },
      {
        name: "Tamul AI (AI-driven podcast agent)",
        description: "Developed AI-driven podcast agent enabling interactive text-to-audio conversations with multilingual support (6+ languages). Integrated WebSocket-based audio/text streaming with Django backend for podcast generation, voice recording (STT), and live participation. Optimized audio queues and WebSocket connections gained 400+ users within 2 days of release.",
        github: "https://github.com/bignya23/tamul-ai.git",
        live: "https://www.tamulai.in/"
      },
      {
        name: "Virtual AI Assistant (Full Stack Developer)",
        description: "Built a voice-enabled virtual assistant with user authentication, avatar, and name customization. Integrated Google Gemini AI to process 10+ natural language command types including time queries and searches. Implemented JWT-based auth with bcrypt hashing; optimized backend scalability with MongoDB indexing. Deployed with Cloudinary CDN integration and React memoization for smooth UI performance.",
        github: "https://github.com/probin-dhakal/VirtualAssistant.git",
        live: "https://virtual-assistant-theta-seven.vercel.app/"
      },
      {
        name: "AI Chat bot - Genai",
        description: "An AI-powered chatbot built with the MERN stack, featuring secure authentication and chat storage in a database. Leveraging the Google Gemini API for cutting-edge generative AI capabilities, it provides intelligent and engaging conversational experiences.",
        github: "https://github.com/probin-dhakal/ai-chatbot-GenieAI.git",
        live: "https://ai-chatbot-genieai-frontend.onrender.com"
      },
      {
        name: "A time capsule website -Samayyatra",
        description: "A MERN-based Time Capsule platform with authentication, OTP-based password recovery, and capsule creation. Features include scheduling opening dates, sending messages, 5-day prior reminders, and capsule deletion for a personalized and secure experience.",
        github: "https://github.com/probin-dhakal/samayyatra.git",
        live: "https://samayyatra-1.onrender.com/"
      },
      {
        name: "A blog website",
        description: "A blog website built with MERN stack, featuring full CRUD functionality. Users can create, update, delete, and manage blogs seamlessly, providing an intuitive platform for sharing and managing content effortlessly.",
        github: "https://github.com/probin-dhakal/FinalBlog.git",
        live: ""
      },
      {
        name: "AN AI Sales Agent",
        description: "The `AI Phone Agent` handles cold calls and sales using AI, incorporating speech-to-text (STT), text-to-speech (TTS), and large language models (LLMs). It processes user inputs, generates responses, handles tasks like scheduling, and allows real-time voice recording and interaction with AI.",
        github: "https://github.com/bignya23/ai-phone-agent",
        live: "https://ai-phone-agent-1.onrender.com/"
      },
      {
        name: "Freelanced Portfolio Website",
        description: "A frontend freelance portfolio website built with React, utilizing hooks for state management. It features dynamic navigation, project showcase, contact form, and a theme toggle, offering a professional and interactive user experience.",
        github: "",
        live: "https://www.bibekdhakal.in/"
      }
    ]
  },
  skills: {
    title: "Probin's Skills:",
    frontend: [
      { name: "HTML 5", percentage: 95 },
      { name: "CSS", percentage: 75 },
      { name: "Javascript", percentage: 80 },
      { name: "React", percentage: 80 },
      { name: "Tailwind CSS", percentage: 75 },
      { name: "Bootstrap", percentage: 90 }
    ],
    backend: [
      { name: "Node.js", percentage: 50 },
      { name: "Express", percentage: 80 },
      { name: "Mongodb", percentage: 50 },
      { name: "Authentication & Authorization", percentage: 90 },
      { name: "Deployment", percentage: 70 },
      { name: "Django", percentage: 70 }
    ],
    others: [
      { name: "C", percentage: 50 },
      { name: "C++", percentage: 85 },
      { name: "Generative AI", percentage: 60 },
      { name: "Python", percentage: 50 },
      { name: "Github", percentage: 80 },
      { name: "Google Cloud", percentage: 80 },
      { name: "VS Code", percentage: 80 }
    ]
  },
  contact: "You can reach Probin at probindhakal5@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/probin-dhakal-1306092b5/",
  experience: {
    title: "Probin's Experience (Position of Responsibility):",
    items: [
      {
        title: "Technical Team Member, IEEE Robotics and Automation Society",
        duration: "Apr 2025 – Present",
        description: "Actively contribute to technical projects and initiatives within the IEEE Robotics and Automation Society."
      },
      {
        title: "Technical Team Member, ECO Club, NIT Silchar",
        duration: "May 2025 – Present",
        description: "Organized GreenX, a campus-wide sustainability hackathon with 30+ teams promoting eco-tech solutions."
      }
    ]
  },
  education: {
    title: "Probin's Education:",
    items: [
      {
        degree: "B.Tech in Electronics and Communication",
        institution: "National Institute of Technology, Silchar",
        duration: "2023-Present",
        result: "8.5/10 (CGPA)",
        description: "B.Tech ECE student passionate about electronics, communication, programming, innovation, and solving real-world challenges."
      },
      {
        degree: "AHSEC",
        institution: "Utopian Academy",
        duration: "2020 - 2022",
        result: "87.2%",
        description: "Successfully completed my 12th grade in PCMB with 87.2%, showcasing a strong foundation in science and academics."
      }
    ]
  },
  resume: "You can view Probin's full resume [here](link_to_your_resume_pdf).", // Replace with actual link
  origin: "Probin is from Silapathar, India."
};

const Chatbot = () => {
  const [currentResponse, setCurrentResponse] = useState(botResponses.initial);
  const [isTyping, setIsTyping] = useState(false);

  const handleOptionClick = (option) => {
    setIsTyping(true);
    setTimeout(() => {
      let replyText = "I'm not sure how to answer that yet.";
      switch (option) {
        case "What are Probin's projects?":
          replyText = (
            <>
              {botResponses.projects.title}<br/><br/>
              {botResponses.projects.items.slice(0, 2).map((project, index) => (
                <div key={index} className="mb-2">
                  <strong>{project.name}</strong>: {project.description.substring(0, 70)}...
                </div>
              ))}
              <p className="mt-2 text-designColor">Click "Explore Full Chat" for all projects and details.</p>
            </>
          );
          break;
        case "What are Probin's skills?":
          replyText = (
            <>
              {botResponses.skills.title}<br/><br/>
              <strong>Frontend:</strong> {botResponses.skills.frontend.map(s => s.name).slice(0, 3).join(', ')}...<br/>
              <strong>Backend:</strong> {botResponses.skills.backend.map(s => s.name).slice(0, 3).join(', ')}...<br/>
              <p className="mt-2 text-designColor">Click "Explore Full Chat" for all skills and details.</p>
            </>
          );
          break;
        case "How can I contact Probin?":
          replyText = botResponses.contact;
          break;
        default:
          break;
      }
      setCurrentResponse(replyText);
      setIsTyping(false);
    }, 500); // Simulate typing delay
  };

  const quickOptions = [
    "What are Probin's projects?",
    "What are Probin's skills?",
    "How can I contact Probin?",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-bodyColor rounded-lg shadow-xl border border-gray-700 mt-8 mb-8">
      <h2 className="text-2xl font-bold text-center text-designColor mb-6">Quick Info About Probin</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Chat Display Area */}
        <div className="flex-1 bg-black bg-opacity-20 p-4 rounded-lg flex flex-col justify-between min-h-[150px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-bodyColor text-lightText p-3 rounded-lg rounded-bl-none shadow-md mb-4"
            >
              {typeof currentResponse === 'string' ? (
                <p className="text-sm md:text-base">{currentResponse}</p>
              ) : (
                <div>{currentResponse}</div>
              )}
            </motion.div>
            {isTyping && (
              <div className="flex items-center gap-1 mb-4">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Link to="/chatbot" className="block w-full py-3 bg-designColor text-white text-center rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-200 text-base font-semibold">
              Explore Full Chat
            </Link>
          </div>
        </div>

        {/* Quick Options */}
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          <h3 className="text-lg font-bold text-white mb-2">Ask a quick question:</h3>
          {quickOptions.map((option) => (
            <motion.button
              key={option}
              onClick={() => !isTyping && handleOptionClick(option)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="py-2 px-3 bg-designColor text-white rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-200 text-sm w-full text-left"
              disabled={isTyping}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
