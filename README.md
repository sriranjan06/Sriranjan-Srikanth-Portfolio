Sriranjan Srikanth - Portfolio Website

🚀 Overview

This is my personal portfolio website, showcasing my projects, skills, and experience as a Full-Stack Developer. It is built with React.js, Bootstrap, and Tailwind CSS, and deployed on Netlify with a custom domain and SSL certification.

🔗 Live Demo: sriranjansrikanth.com
📌 GitHub Repository: github.com/sriranjan06/portfolio

📸 Preview

🛠 Tech Stack
• Frontend: React.js, Bootstrap, Tailwind CSS
• Animations: React Spring, Typewriter Effect
• Icons: React Icons (FontAwesome)
• Deployment: Netlify

📂 Folder Structure

```
portfolio/
│── public/ # Static assets (favicon, images, etc.)
│── src/
│ ├── assets/ # Images and icons
│ ├── components/ # Reusable UI components
│ ├── pages/ # Main pages (Home, About, Projects, Contact)
│ ├── styles/ # CSS and Tailwind styles
│ ├── App.js # Main App component
│ ├── index.js # Entry point
│── .gitignore # Git ignore file
│── package.json # Dependencies and scripts
│── README.md # Project documentation (You're reading it!)
```

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/sriranjan06/portfolio.git
cd portfolio

2️⃣ Install Dependencies

npm install

3️⃣ Run the Project Locally

npm start

    •	The portfolio will run on http://localhost:3000/

🌍 Deployment

This project is automatically deployed to Netlify on every push to the main branch.

To Manually Deploy: 1. Build the Project:

npm run build

    2.	Deploy to Netlify:
    •	Push the build/ folder to Netlify via GitHub or CLI.

🔧 Troubleshooting

🔴 Netlify Build Issues

If Netlify throws a build error, check: 1. Incorrect asset paths (especially images in src/assets/). 2. Missing dependencies – Run npm install. 3. Outdated browserslist – Run:

npx browserslist@latest --update-db

🔴 Domain & SSL Issues
• Ensure Netlify has auto SSL enabled in Domain Settings.
• Use netlify.toml to enforce HTTPS:

[[redirects]]
from = "http://sriranjansrikanth.dev/*"
to = "https://sriranjansrikanth.dev/:splat"
status = 301
force = true

📌 Future Improvements
• ✅ Improve mobile responsiveness.
• ✅ Add a dark mode toggle.
• ✅ Optimize images for faster loading.
• ✅ Add a blog section for tech insights.

📬 Connect with Me

💼 LinkedIn: linkedin.com/in/sriranjan-s
📧 Email: ssrika21@asu.edu
🐙 GitHub: github.com/sriranjan06

⭐ Contributing

If you’d like to contribute: 1. Fork the repo. 2. Create a new branch. 3. Make your changes and submit a Pull Request.

📜 License

This project is MIT Licensed. You’re free to modify and share, but please credit the original author.
