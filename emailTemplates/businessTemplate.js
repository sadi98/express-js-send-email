// emailTemplates/businessTemplate.js
export function businessTemplate(subject, message) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
        <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; text-align: center; padding: 20px;">
          <h2>${subject}</h2>
        </div>
        <div style="padding: 25px;">
          <img src="https://i.imgur.com/0y8Ftya.png" width="120" alt="Header" style="display:block;margin:0 auto 20px;">
          <p style="font-size: 16px; color:#333; line-height:1.6;">${message}</p>
          <p style="margin-top: 20px; font-size: 13px; color:#777;">📅 ${new Date().toLocaleString(
            "id-ID"
          )}</p>
          <div style="text-align:center; margin-top: 30px;">
            <a href="https://bizclaim.imsappservices.com" style="background:#007bff;color:white;text-decoration:none;padding:10px 20px;border-radius:8px;font-weight:bold;">Kunjungi Dashboard</a>
          </div>
        </div>
        <div style="background:#f1f1f1;text-align:center;padding:10px;color:#999;font-size:12px;">
          © ${new Date().getFullYear()} Sistem Notifikasi Express
        </div>
      </div>
    </div>
  `;
}
