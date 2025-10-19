// emailTemplates/alertTemplate.js
export function alertTemplate(subject, message) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #fff5f5; padding: 20px;">
      <div style="max-width: 600px; margin:auto; background:white; border:1px solid #f5c2c7; border-radius:10px;">
        <div style="background:#dc3545;color:white;text-align:center;padding:20px;">
          <h2>${subject}</h2>
        </div>
        <div style="padding:25px;">
          <p style="font-size:16px; color:#333;">${message}</p>
          <p style="margin-top:20px;color:#777;font-size:13px;">Waktu: ${new Date().toLocaleString(
            "id-ID"
          )}</p>
        </div>
        <div style="background:#f9d7da;color:#842029;text-align:center;padding:10px;font-size:12px;">
          ⚠️ Hati-hati, tindakan ini bersifat permanen.
        </div>
      </div>
    </div>
  `;
}
