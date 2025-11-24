import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const filePath = path.join(process.cwd(), 'data', 'waitlist.json');
    
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let waitlist = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      waitlist = JSON.parse(fileData);
    }

    if (!waitlist.find(entry => entry.email === email)) {
      const newEntry = {
        email,
        timestamp: new Date().toISOString(),
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      };

      waitlist.push(newEntry);
      fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2));
      
      console.log('New waitlist signup:', email);
      
      return res.status(200).json({ success: true });
    } else {
      return res.status(409).json({ error: 'Email already exists' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
