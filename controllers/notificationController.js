import db from "../config/db.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { businessTemplate } from "../emailTemplates/businessTemplate.js";
import { friendlyTemplate } from "../emailTemplates/friendlyTemplate.js";
import { alertTemplate } from "../emailTemplates/alertTemplate.js";

dotenv.config();

// ===== KONFIGURASI EMAIL =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ===== FUNGSI KIRIM EMAIL =====
async function sendEmail(subject, message, templateName = "business") {
  try {
    let htmlTemplate;

    switch (templateName) {
      case "friendly":
        htmlTemplate = friendlyTemplate(subject, message);
        break;
      case "alert":
        htmlTemplate = alertTemplate(subject, message);
        break;
      default:
        htmlTemplate = businessTemplate(subject, message);
    }

    await transporter.sendMail({
      from: `"Sistem Notifikasi" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject,
      html: htmlTemplate,
    });

    console.log(`📧 Email (${templateName}) terkirim: ${subject}`);
  } catch (err) {
    console.error("❌ Gagal kirim email:", err.message);
  }
}

// ===== CREATE =====
export const createNotification = (req, res) => {
  const { title, message } = req.body;

  const sql = "INSERT INTO notifications (title, message) VALUES (?, ?)";
  db.query(sql, [title, message], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    // Kirim email setelah berhasil create
    await sendEmail(
      "🆕 Notifikasi Baru Dibuat",
      `Notifikasi baru dengan judul: <b>${title}</b> berhasil ditambahkan.`,
      "business"
    );

    res.json({
      message: "✅ Data berhasil ditambahkan dan email terkirim!",
    });
  });
};

// ===== UPDATE =====
export const updateNotification = (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  const sql = "UPDATE notifications SET title=?, message=? WHERE id=?";
  db.query(sql, [title, message, id], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    await sendEmail(
      "✏️ Notifikasi Diperbarui",
      `Notifikasi dengan ID <b>${id}</b> telah diperbarui menjadi: <b>${title}</b>.`,
      "friendly"
    );

    res.json({
      message: "✅ Data berhasil diperbarui dan email terkirim!",
    });
  });
};

// ===== DELETE =====
export const deleteNotification = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM notifications WHERE id=?";
  db.query(sql, [id], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    await sendEmail(
      "🗑️ Notifikasi Dihapus",
      `Notifikasi dengan ID <b>${id}</b> telah dihapus dari database.`,
      "alert"
    );

    res.json({
      message: "🗑️ Data berhasil dihapus dan email terkirim!",
    });
  });
};

// ===== GET ALL =====
export const getNotifications = (req, res) => {
  const sql = "SELECT * FROM notifications ORDER BY id DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

// ===== GET BY ID =====
export const getNotificationById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM notifications WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(result[0]);
  });
};
