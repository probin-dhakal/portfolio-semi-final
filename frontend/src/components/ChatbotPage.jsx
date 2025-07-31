import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { FaUser, FaRobot } from 'react-icons/fa';

// Placeholder for content that will be extracted from other components
const botResponses = {
  initial: "Hello! I'm Probin's AI assistant. Feel free to ask me anything about him, or use the quick options below!",
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

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: botResponses.initial, options: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('project')) {
      return (
        <>
          {botResponses.projects.title}<br/><br/>
          {botResponses.projects.items.map((project, index) => (
            <div key={index} className="mb-4">
              <strong>{project.name}</strong>: {project.description}<br/>
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-designColor hover:underline">GitHub</a>}
              {project.github && project.live && " | "}
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-designColor hover:underline">Live Demo</a>}
            </div>
          ))}
        </>
      );
    } else if (lowerCaseMessage.includes('skill')) {
      return (
        <>
          {botResponses.skills.title}<br/><br/>
          <strong>Frontend:</strong> {botResponses.skills.frontend.map(s => s.name).join(', ')}<br/>
          <strong>Backend:</strong> {botResponses.skills.backend.map(s => s.name).join(', ')}<br/>
          <strong>Others:</strong> {botResponses.skills.others.map(s => s.name).join(', ')}
        </>
      );
    } else if (lowerCaseMessage.includes('contact')) {
      return botResponses.contact;
    } else if (lowerCaseMessage.includes('experience')) {
      return (
        <>
          {botResponses.experience.title}<br/><br/>
          {botResponses.experience.items.map((exp, index) => (
            <div key={index} className="mb-4">
              <strong>{exp.title}</strong> ({exp.duration})<br/>
              {exp.description}
            </div>
          ))}
        </>
      );
    } else if (lowerCaseMessage.includes('education')) {
      return (
        <>
          {botResponses.education.title}<br/><br/>
          {botResponses.education.items.map((edu, index) => (
            <div key={index} className="mb-4">
              <strong>{edu.degree}</strong> from {edu.institution}<br/>
              ({edu.duration}) - Result: {edu.result}<br/>
              {edu.description}
            </div>
          ))}
        </>
      );
    } else if (lowerCaseMessage.includes('resume')) {
      return botResponses.resume;
    } else if (lowerCaseMessage.includes('origin') || lowerCaseMessage.includes('from where')) {
      return botResponses.origin;
    } else {
      return "I'm Probin's AI assistant. I can provide information about his projects, skills, experience, education, resume, and contact details. For more general questions or a truly conversational AI, a backend integration with services like Google Gemini would be needed.";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReplyText = getBotResponse(userMessage.text);
      setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botReplyText }]);
      setIsTyping(false);
    }, 1000); // Simulate typing delay
  };

  const handleOptionClick = (option) => {
    const userMessage = { type: 'user', text: option };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botReplyText = getBotResponse(option);
      setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botReplyText }]);
      setIsTyping(false);
    }, 1000); // Simulate typing delay
  };

  const MessageBubble = ({ message }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-3 mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {message.type === 'bot' && (
        <div className="w-8 h-8 rounded-full bg-designColor flex items-center justify-center flex-shrink-0">
          <FaRobot className="text-white" />
        </div>
      )}
      <div
        className={`p-3 rounded-lg max-w-[70%] ${
          message.type === 'user'
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-bodyColor text-lightText rounded-bl-none shadow-md'
        }`}
      >
        {typeof message.text === 'string' ? (
          <p className="text-sm md:text-base">{message.text}</p>
        ) : (
          <div>{message.text}</div>
        )}
      </div>
      {message.type === 'user' && (
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
          <FaUser className="text-white" />
        </div>
      )}
    </motion.div>
  );

  const TypingIndicator = () => (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-8 h-8 rounded-full bg-designColor flex items-center justify-center flex-shrink-0">
        <FaRobot className="text-white" />
      </div>
      <div className="bg-bodyColor text-lightText p-3 rounded-lg rounded-bl-none shadow-md flex items-center gap-1">
        <span className="typing-dot"></span>
        <span className="typing-dot"></span>
        <span className="typing-dot"></span>
      </div>
    </div>
  );

  const quickOptions = [
    "Probin's Projects",
    "Probin's Skills",
    "Contact Probin",
    "Probin's Experience",
    "Probin's Education",
    "Probin's Resume",
    "Probin's Origin"
  ];

  return (
    <div className="flex flex-col h-screen bg-bodyColor text-lightText">
      {/* Chat header */}
      <div className="py-4 text-center border-b-[1px] border-b-black">
        <h1 className="text-2xl font-bold">Probin's AI Assistant (Full Page)</h1>
      </div>

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))}
          {isTyping && <TypingIndicator />}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Options / Input Area */}
      <div className="sticky bottom-0 bg-bodyColor border-t-[1px] border-t-black p-4 flex flex-col gap-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {quickOptions.map((option) => (
            <motion.button
              key={option}
              onClick={() => !isTyping && handleOptionClick(option)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="py-2 px-3 bg-designColor text-white rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-200 text-sm text-center"
              disabled={isTyping}
            >
              {option}
            </motion.button>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about Probin..."
            className="flex-1 p-3 rounded-lg bg-black bg-opacity-20 border border-gray-700 focus:border-designColor outline-none text-lightText placeholder-gray-500"
            disabled={isTyping}
          />
          <motion.button
            type="submit"
            className="p-3 bg-designColor text-white rounded-lg hover:bg-opacity-80 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isTyping}
          >
            <FiSend />
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;
