import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields (Name, Email, Subject, Message).' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Configure Nodemailer with Gmail SMTP
    // Note: EMAIL_USER and EMAIL_PASS must be set in Vercel environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Recommended to send from your own address to avoid spam filters
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email, // Reply will go to the sender
      subject: `Portfolio Contact: ${subject}`,
      text: `
        You have a new message from your portfolio contact form.

        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Subject: ${subject}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-bottom: 20px; border-bottom: 2px solid #00D9FF; padding-bottom: 10px;">New Message from Portfolio</h2>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em;">From</p>
            <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px;"><strong>${name}</strong> (${email})</p>
          </div>

          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em;">Phone</p>
            <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px;">${phone || 'N/A'}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em;">Subject</p>
            <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px;">${subject}</p>
          </div>

          <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em;">Message</p>
            <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            This email was sent from your portfolio contact form.
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error. Please try again later.' });
  }
}
