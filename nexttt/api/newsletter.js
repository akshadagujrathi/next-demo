export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, message } = req.body;
  
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'akshadagujrathi256@gmail.com' });
      }
  
      // Your additional form validation logic can go here
  
      try {
        // Send email code here (using Nodemailer or another email sending service)
        // Example:
        // await sendEmail(email, message);
  
        res.status(200).json({ message: 'Subscription successful!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to subscribe. Please try again later.' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  