import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Title from "./layouts/Title";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setUsername] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when sending starts

    // Basic validation
    if (!name) {
      setErrMsg("Username is required!");
      setIsLoading(false);
      return;
    } else if (!phone) {
      setErrMsg("Phone number is required!");
      setIsLoading(false);
      return;
    } else if (!email) {
      setErrMsg("Please provide your email!");
      setIsLoading(false);
      return;
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email!");
      setIsLoading(false);
      return;
    } else if (!subject) {
      setErrMsg("Subject is required!");
      setIsLoading(false);
      return;
    } else if (!message) {
      setErrMsg("Message is required!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://probin-portfolio-backend.onrender.com/api/send-message",
        {
          name,
          phone,
          email,
          subject,
          message,
        },
         {
      headers: {
        'Content-Type': 'application/json',
      },
       withCredentials: true,
}
      );

      if (response.status === 200) {
        setSuccessMsg("Your message has been sent successfully!");
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      setErrMsg("Failed to send your message. Please try again later.");
    } finally {
      setIsLoading(false); // Set loading to false when operation completes
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          {/* Left Side */}
          <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src="/connect.jpeg"
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Probin Dhakal</h3>
              <p className="text-lg font-normal text-gray-400">
                MERN Stack Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                Let's bring your ideas to life! Reach out, and let's create
                something amazing together.
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+91 7896XXXXXX</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{" "}
                <span className="text-lightText">probindhakal5@gmail.com</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4"></h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <Link
                    to={
                      "https://www.facebook.com/profile.php?id=100088985135162"
                    }
                    target="_blank"
                  >
                    <FaFacebookF />
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
          </div>

          {/* Right Side */}
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {(errMsg || successMsg) && (
                <p
                  className={`py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center ${
                    errMsg ? "text-orange-500" : "text-green-500"
                  } text-base tracking-wide animate-bounce`}
                >
                  {errMsg || successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={name}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phone}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  disabled={isLoading} // Disable button when loading
                  className={`w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
