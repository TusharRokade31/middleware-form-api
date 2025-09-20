const generateEmailTemplate = (application) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; }
            .content { padding: 20px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-left: 10px; }
            .footer { border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Job Application Received</h2>
                <p>Application Date: ${new Date(application.applicationDate).toLocaleDateString()}</p>
            </div>
            
            <div class="content">
                <h3>Personal Information</h3>
                <div class="field">
                    <span class="label">Full Name:</span>
                    <span class="value">${application.fullName}</span>
                </div>
                <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">${application.email}</span>
                </div>
                <div class="field">
                    <span class="label">Phone:</span>
                    <span class="value">${application.phone}</span>
                </div>
                
                <h3>Professional Details</h3>
                <div class="field">
                    <span class="label">Current Designation:</span>
                    <span class="value">${application.designation}</span>
                </div>
                <div class="field">
                    <span class="label">Current Employer:</span>
                    <span class="value">${application.employer}</span>
                </div>
                <div class="field">
                    <span class="label">Years of Experience:</span>
                    <span class="value">${application.experience}</span>
                </div>
                <div class="field">
                    <span class="label">Post Applied For:</span>
                    <span class="value">${application.postAppliedFor}</span>
                </div>
                
                <div class="footer">
                    <p><strong>Note:</strong> The applicant's resume is attached to this email.</p>
                    <p>Application ID: ${application._id}</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = { generateEmailTemplate };