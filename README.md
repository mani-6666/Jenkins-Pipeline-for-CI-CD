# 🚀 Jenkins CI/CD Pipeline – Node.js App Deployment

This repository demonstrates a simple **CI/CD pipeline using Jenkins** to automate the build and deployment of a Node.js application using Docker.

---

## 📌 Task Objective

Set up a Jenkins pipeline to automate the **build**, **test**, and **deployment** process of a web application.

---

## 🛠️ Tools & Technologies Used

- **Jenkins** – CI/CD automation tool  
- **Docker** – Containerization platform  
- **Node.js** – Backend application runtime  
- **GitHub** – Source code repository  
- **AWS EC2 (Ubuntu)** – Jenkins host server  

---

## ✅ What I Did

### 1. 🧱 Node.js Application Setup
- Created a basic Node.js app using `index.js` and `package.json`.
- The app responds with a simple "Hello, Jenkins CI/CD!" message.

### 2. 🐳 Docker Configuration
- Wrote a `Dockerfile` to:
  - Set up Node.js in a container.
  - Copy source code.
  - Install dependencies.
  - Run the application on port 80.

### 3. 📄 Created `Jenkinsfile`
- Defined a declarative Jenkins pipeline with three stages:
  - **Build**: Build a Docker image for the app.
  - **Test**: Placeholder for running tests.
  - **Deploy**: Run the Docker container.


### 4. ⚙️ Jenkins Configuration
- Installed Jenkins on an AWS EC2 instance (Ubuntu).
- Installed required plugins:
  - Docker
  - Pipeline
  - GitHub integration
- Gave Docker permissions to Jenkins:
  \`\`\`bash
  sudo usermod -aG docker jenkins
  sudo systemctl restart jenkins
  \`\`\`
- Configured a webhook in GitHub to trigger the Jenkins pipeline on every code commit.

---

## 🚀 How to Test the Pipeline

1. Push code to the GitHub repository.
2. Jenkins automatically detects the change and starts the pipeline.
3. Once complete:
   - You can see the build logs on Jenkins Dashboard.
   - Access the app in your browser at \`http://<your-ec2-public-ip>\`.

---

## 📂 Project Structure

\`\`\`
├── Dockerfile
├── Jenkinsfile
├── index.js
├── package.json
└── README.md
\`\`\`

---

## 📌 Key Takeaways

- Understood how Jenkins automates CI/CD pipelines.
- Gained hands-on experience with Docker and Jenkinsfile syntax.
- Learned how to integrate GitHub, Jenkins, and Docker in a real-world DevOps scenario.

---

## 🔗 Connect with Me

If you find this project helpful or have any suggestions, feel free to connect and collaborate!
