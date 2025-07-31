import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sendReplyEmail } from "./utils/sendEmail.js";
import nodemailer from "nodemailer";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8002;

app.use(
  cors({
    origin: "https://portfolio-semi-final.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.post("/api/send-message", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  // Configure the email
  const mailOptions = {
    from: email, // Visitor's email address
    to: process.env.EMAIL_USER, // Your email address
    subject: `Contact Form Submission: ${subject}`,
    text: `You received a new message from your portfolio website:

     Name: ${name}
     Email: ${email}
     Subject: ${subject}
     Message: ${message}`,
  };
  try {
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "your-email@gmail.com",
    //     pass: "your-email-password",
    //   },
    // });

    // const mailOptions = {
    //   from: `"${name}" <${email}>`,
    //   to: "probindhakal5@gmail.com",
    //   subject: `Portfolio Website Message: ${subject}`,
    //   text: `
    //         You have a new message from your portfolio website:

    //         Name: ${name}
    //         Email: ${email}
    //         Phone: ${phone}
    //         Subject: ${subject}
    //         Message:
    //         ${message}
    //         `,
    // };

    await transporter.sendMail(mailOptions);
    sendReplyEmail(email, name, subject, message);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
