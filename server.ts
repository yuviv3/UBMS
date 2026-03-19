import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    const { fullName, email, vertical, message } = req.body;

    if (!fullName || !email || !vertical || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      const nodemailer = await import("nodemailer");
      
      // Configure transporter (using environment variables)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${fullName}" <${email}>`,
        to: "contact@unicornbs.com",
        subject: `New Enquiry: ${vertical}`,
        text: `
          Name: ${fullName}
          Email: ${email}
          Vertical: ${vertical}
          Message: ${message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Vertical:</strong> ${vertical}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // In a real app, we'd send the email. 
      // If credentials aren't set, we'll log it for now but provide the code.
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent from ${email} to contact@unicornbs.com`);
      } else {
        console.log("Email credentials not set. Logging enquiry instead:");
        console.log(mailOptions);
      }

      res.status(200).json({ message: "Enquiry sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send enquiry. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
