export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Contact Form Submission:', req.body); // Replace with email integration later
    res.status(200).json({ message: 'Message received!' });
  } else {
    res.status(405).end();
  }
}
