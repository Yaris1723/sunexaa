import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  timestamp: string;
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // For development/testing, you can use Gmail SMTP
  // For production, consider using SendGrid, AWS SES, or other email services
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email address
      pass: process.env.SMTP_PASSWORD, // Your email password or app password
    },
  });
};

// Format the email content
const formatEmailContent = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1e3a8a; }
    .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #3b82f6; }
    .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>BABA SUNEXAA Trading Pvt. Ltd.</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="label">Full Name:</div>
        <div class="value">${data.name}</div>
      </div>
      
      <div class="field">
        <div class="label">Company Name:</div>
        <div class="value">${data.company || 'Not provided'}</div>
      </div>
      
      <div class="field">
        <div class="label">Email Address:</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      
      <div class="field">
        <div class="label">Phone Number:</div>
        <div class="value">${data.phone || 'Not provided'}</div>
      </div>
      
      <div class="field">
        <div class="label">Product Category:</div>
        <div class="value">${data.category || 'Not specified'}</div>
      </div>
      
      <div class="field">
        <div class="label">Message / Requirements:</div>
        <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
      
      <div class="field">
        <div class="label">Submission Time:</div>
        <div class="value">${new Date(data.timestamp).toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'long'
        })}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>This is an automated notification from your website contact form.</p>
      <p>Please respond to the customer at: ${data.email}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
};

// Send contact form notification email
export async function sendContactFormEmail(data: ContactFormData): Promise<void> {
  try {
    const transporter = createTransporter();
    
    // Email options
    const mailOptions = {
      from: `"BABA SUNEXAA Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'Kowshikrajab@babasunexaa.com',
      subject: `New Contact Form Submission - ${data.name} (${data.category || 'General Inquiry'})`,
      html: formatEmailContent(data),
      replyTo: data.email, // Allow direct reply to the customer
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email notification');
  }
}
