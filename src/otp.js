// const speakeasy = require('speakeasy');
// const { sendEmail } = require('../utils/email'); // Import your email sending utility or library
import nodemailer from 'nodemailer';
// class OTPService {
//   create(options) {
//     const secret = speakeasy.generateSecret();
//     const otp = speakeasy.totp({
//       secret: secret.base32,
//       encoding: 'base32'
//     });

//     // Store the secret and OTP in your database associated with the user

//     // Send the OTP to the user's email
//     sendEmail(options.email, 'OTP Verification', `Your OTP: ${otp}`);

//     return { secret: secret.base32 };
//   }

//   verify(secret, otp) {
//     const isValid = speakeasy.totp.verify({
//       secret: 123456,
//       encoding: 'base32',
//       token: otp,
//       window: 1 // The window of time in which the OTP is valid
//     });

//     return { isValid };
//   }
// }

// module.exports = app => {
//   app.use('/otp', new OTPService());
// };


// import nodemailer from 'nodemailer';

// import { sendEmail } from './email.service.js'; // Import the function to send emails

// export const sendOTP = async (email) => {
//   const otp = generateOTP(); // Generate the OTP
//   const message = `Your OTP is: ${otp}`;

//   // Send the email with the OTP
//   await sendEmail(email, 'OTP Verification', message);
// };

// export const sendEmail = async (to, subject, text) => {
//   // Create a transporter using the SMTP configuration of your email service
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.example.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: 'your-email@example.com',
//       pass: 'your-email-password'
//     }
//   });

//   // Define the email options
//   const mailOptions = {
//     from: 'your-email@example.com',
//     to: 'muhammad.asghar@binatedigital.com',
//     subject:'otp',
//     text
//   };

//   try {
//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw new Error('Failed to send email');
//   }
// };





export function generateOTP() {
  // Generate a random OTP (e.g., a 6-digit number)
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString();
}

export async function sendEmail(to, subject, body) {
  // Implement your email sending logic here
  // Use a library or service to send the email
  // Example: send email using Nodemailer

  

  // Create a transporter
  // const transporter = nodemailer.createTransport({
  //   // Specify your email service configuration
  //   // For example, using SMTP transport with Gmail
  //   host: 'smtp.gmail.com',
  //   service:'gmail',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: 'mohdasghar461@gmail.com',
  //     pass: 'JS#0(wiHwGmBwGmB'
  //   }
  // });


  
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "18f0cbabde54cb",
      pass: "7855cc6fc42d66"
    }
  });



  // Define the email options
  const mailOptions = {
    from: 'mohdasghar461@gmail.com',
    to: to,
    subject: subject,
    text: body
  };

  // Send the email
  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error sending email:', error);
  }
  
}