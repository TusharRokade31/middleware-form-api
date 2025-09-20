Career Application Form - Node.js Project
A full-stack web application for handling career applications with form data collection, MongoDB storage, file uploads, and automated email notifications.
🚀 Features

Complete Form Handling with client-side and server-side validation
File Upload Support for resume/CV (PDF, DOC, DOCX)
MongoDB Integration for persistent data storage
Email Notifications with resume attachments
Responsive Design for mobile and desktop
Professional Email Templates with application details
Error Handling and success feedback
RESTful API for application management

📋 Table of Contents

Prerequisites
Installation
Configuration
Usage
API Endpoints
Project Structure
Technologies Used
Troubleshooting
Contributing
License

📦 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v14.0.0 or higher)
npm (comes with Node.js)
MongoDB (Local installation or MongoDB Atlas account)
Gmail Account (for email notifications)

🔧 Installation

Clone the repository:

bash   git clone <repository-url>
   cd career-form-app

Install dependencies:

bash   npm install

Create uploads directory:

bash   mkdir uploads

Create environment file:

bash   cp .env.example .env
Or create .env file manually (see Configuration section)
⚙️ Configuration
Create a .env file in the root directory with the following variables:
env# Database Configuration
MONGODB_URI=mongodb://localhost:27017/career-applications
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/career-applications

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=hr@yourcompany.com

# Server Configuration
PORT=3000
NODE_ENV=development
📧 Email Setup (Gmail)

Enable 2-Factor Authentication on your Gmail account
Generate App Password:

Go to Google Account Settings → Security
Click "App passwords"
Select "Mail" and "Other (custom name)"
Copy the 16-character password (remove spaces)
Use this password in EMAIL_PASS



🗄️ Database Setup
Option 1: Local MongoDB

Install MongoDB Community Edition
Start MongoDB service:

bash  # Windows
  net start MongoDB
  
  # macOS
  brew services start mongodb/brew/mongodb-community
  
  # Linux
  sudo systemctl start mongod
Option 2: MongoDB Atlas (Recommended)

Create free account at MongoDB Atlas
Create cluster and get connection string
Update MONGODB_URI in .env

🚀 Usage
Development Mode
bashnpm run dev
Production Mode
bashnpm start
The application will be available at: http://localhost:3000
🧪 Testing Database Connection
bashnode test-db.js
📧 Testing Email Configuration
bashnode test-email.js
📡 API Endpoints
Submit Application

POST /api/applications
Content-Type: multipart/form-data
Body Parameters:

full_name (string, required)
email (string, required)
phone (string, required)
designation (string, required)
employer (string, required)
experience (number, required)
post_applied (string, required)
resume (file, required) - PDF, DOC, or DOCX



Response:
json{
  "success": true,
  "message": "Application submitted successfully!",
  "applicationId": "64f7b8c9d1234567890abcde"
}
Get All Applications

GET /api/applications
Response:

json{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "64f7b8c9d1234567890abcde",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "designation": "Software Developer",
      "employer": "Tech Corp",
      "experience": 3.5,
      "postAppliedFor": "Senior Developer",
      "applicationDate": "2024-01-15T10:30:00.000Z",
      "status": "pending"
    }
  ]
}
Health Check

GET /health
Response:

json{
  "status": "OK",
  "message": "Server is running"
}
📁 Project Structure
career-form-app/
├── 📄 package.json              # Dependencies and scripts
├── 📄 .env                      # Environment variables
├── 📄 .gitignore               # Git ignore rules
├── 📄 server.js                # Main server file
├── 📄 README.md                # Project documentation
├── 📁 config/
│   ├── 📄 database.js          # MongoDB connection
│   └── 📄 email.js             # Email configuration
├── 📁 models/
│   └── 📄 Application.js       # MongoDB schema
├── 📁 routes/
│   └── 📄 applications.js      # API routes
├── 📁 middleware/
│   └── 📄 upload.js            # File upload middleware
├── 📁 controllers/
│   └── 📄 applicationController.js  # Business logic
├── 📁 utils/
│   └── 📄 emailTemplate.js     # Email templates
├── 📁 uploads/                 # Uploaded files directory
│   └── 📄 .gitkeep
└── 📁 public/                  # Static files
    ├── 📄 index.html           # Main HTML page
    └── 📄 style.css            # Styles
🛠️ Technologies Used

Backend:

Node.js
Express.js
MongoDB with Mongoose
Multer (file uploads)
Nodemailer (email sending)


Frontend:

HTML5
CSS3
Vanilla JavaScript


Other:

dotenv (environment variables)
CORS (cross-origin requests)



🔍 Form Fields
The application form collects the following information:
Personal Information

Full Name (required)
Email Address (required)
Mobile Number (required)

Professional Details

Current Designation (required)
Current Employer (required)
Years of Experience (required)
Post Applied For (required, dropdown)
Resume/CV Upload (required, PDF/DOC/DOCX)

📋 Available Job Positions
The form includes these predefined job positions:

Software Developer
Frontend Developer
Backend Developer
Full Stack Developer
DevOps Engineer
Product Manager
UI/UX Designer

You can modify these in public/index.html or make them dynamic by storing in the database.
🛡️ Security Features

File Type Validation: Only allows PDF, DOC, DOCX files
File Size Limit: Maximum 5MB per file
Input Sanitization: All inputs are validated and sanitized
Error Handling: Comprehensive error handling with user-friendly messages
Environment Variables: Sensitive data stored in .env file

🐛 Troubleshooting
Common Issues
1. Database Connection Error:
Error: connect ECONNREFUSED 127.0.0.1:27017

Solution: Make sure MongoDB is running
Check: mongosh command should connect without errors

2. Email Sending Failed:
Error: Invalid login: 535-5.7.8 Username and Password not accepted

Solution: Use App Password instead of regular Gmail password
Check: Enable 2-Factor Authentication first

3. File Upload Error:
Error: Only PDF, DOC, and DOCX files are allowed

Solution: Check file extension and ensure it's a valid document

4. Port Already in Use:
Error: listen EADDRINUSE :::3000

Solution: Change PORT in .env or kill the process using port 3000

Debug Mode
Enable detailed logging by setting:
envNODE_ENV=development
Logs Location

Application logs: Console output
Upload errors: Check uploads/ directory permissions
MongoDB logs: Check MongoDB installation directory

📝 Development
Adding New Features

New API Endpoints: Add routes in routes/applications.js
Database Changes: Update models/Application.js
Frontend Changes: Modify public/index.html and public/style.css
Email Templates: Update utils/emailTemplate.js

Testing
Create test files for different components:
bashnode test-db.js        # Test database connection
node test-email.js     # Test email functionality
🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
📞 Support
If you encounter any issues or have questions:

Check the Troubleshooting section
Search existing issues on GitHub
Create a new issue with detailed description
Contact the development team

🙏 Acknowledgments

Express.js team for the web framework
MongoDB team for the database
Nodemailer team for email functionality
Multer team for file upload handling


Built with ❤️ for efficient career application management
