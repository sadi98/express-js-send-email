// emailTemplates/friendlyTemplate.js
export function friendlyTemplate(subject, message) {
  return `
    <div style="font-family: Poppins, Arial; background-color: #fcfff5; padding: 20px;">
      <div style="max-width: 600px; margin:auto; background:white; border-radius:12px; border:2px solid #bde5b8;">
        <div style="background:#bde5b8;color:#234d20;text-align:center;padding:20px;">
          <h2>${subject}</h2>
        </div>
        <div style="padding:25px; color:#333;">
          <p style="font-size:16px; line-height:1.6;">${message}</p>
          <div style="margin-top:30px;text-align:center;">
            <a href="https://bizclaim.imsappservices.com" style="background:#5cb85c;color:white;text-decoration:none;padding:10px 20px;border-radius:6px;">Lihat Detail</a>
          </div>
        </div>
        <div style="background:#f7f7f7;padding:10px;text-align:center;font-size:12px;color:#555;">
          🌿 Terima kasih sudah menggunakan layanan kami!
        </div>
      </div>
    </div>
  `;
}
