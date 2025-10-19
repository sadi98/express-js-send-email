import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function testEmail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "Tes Email dari Nodemailer 🚀",
      html: "<p>Halo! Ini adalah <b>email percobaan</b> dari server Node.js kamu.</p>",
    });

    console.log("✅ Email berhasil dikirim!");
    console.log("📧 Info:", info.response);
  } catch (err) {
    console.error("❌ Gagal kirim email:", err);
  }
}

testEmail();
