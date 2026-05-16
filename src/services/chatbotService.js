// Mock AI Chatbot Service for Portfolio
// This can be easily replaced with real APIs (OpenAI, Gemini, etc.)

const portfolioContext = {
  name: "Akash Vijayan",
  title: "Full Stack Developer",
  skills: ["React", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB", "Python"],
  services: "Web development, Full-stack applications, UI/UX design",
  email: "akash.it2027@gmail.com",
};

const responses = {
  greeting: [
    "Hi! 👋 Welcome to my portfolio! I'm an AI assistant here to help answer questions about me, my projects, and services. What would you like to know?",
    "Hello! 🎉 I'm Akash's AI assistant. Feel free to ask me anything about his work, skills, or how to get in touch!",
    "Welcome! 🚀 I'm here to tell you about Akash's work and expertise. What brings you here today?",
  ],
  about: [
    "I'm Akash Vijayan, a passionate Full Stack Developer with expertise in building modern web applications. I specialize in React, Node.js, and creating beautiful user experiences. I'm deeply interested in solving real-world problems through technology.",
    "Akash is a Full Stack Developer focused on creating innovative web solutions. He loves working with cutting-edge technologies and solving complex problems! With years of experience, he's built everything from single-page applications to complete backend systems.",
    "I'm a developer who believes in clean code, user-centered design, and continuous learning. My journey in tech has taught me that great software comes from understanding both the technology and the people who use it.",
  ],
  skills: [
    `My core technical stack includes: ${portfolioContext.skills.join(", ")}. I'm proficient in both frontend and backend development, with a strong focus on creating scalable and maintainable code that stands the test of time.`,
    `Frontend: React, JavaScript, Tailwind CSS, HTML5, CSS3. Backend: Node.js, MongoDB. I also have experience with Python for scripting and automation. My expertise spans across the entire web development spectrum.`,
    `I specialize in ${portfolioContext.skills.slice(0, 3).join(", ")} for frontend work, and ${portfolioContext.skills.slice(3).join(", ")} for backend solutions. I'm always eager to learn new technologies and frameworks!`,
  ],
  projects: [
    "I've worked on various projects including web applications, e-commerce platforms, and data-driven solutions. Each project has taught me something unique about handling real-world challenges. Check the Projects section to see detailed case studies and live demonstrations!",
    "My portfolio showcases diverse projects ranging from solo ventures to collaborative team efforts. Each project demonstrates different technical skills and creative problem-solving approaches. I'm particularly proud of projects that have delivered real value to users.",
    "From interactive web apps to full-stack systems, my projects reflect my commitment to quality and innovation. I love tackling challenging problems and delivering solutions that exceed expectations. Browse the Projects section to see what I've built!",
  ],
  contact: [
    "You can reach out through the Contact section on this page or email me directly at akash.it2027@gmail.com. I'm always open to discussing new opportunities, collaborations, or answering technical questions! I typically respond within 24 hours.",
    "The best way to connect with me is through the Contact form right here on this portfolio. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!",
    "Feel free to send me a message through the Contact form, and I'll get back to you as soon as possible. I'm interested in freelance work, full-time opportunities, and collaborative projects!",
  ],
  services: [
    `I offer ${portfolioContext.services}. Whether you need a complete custom web application, help modernizing existing systems, or building scalable solutions from scratch, I'm here to help deliver high-quality results.`,
    "I provide end-to-end web development services, from initial concept and design through deployment and maintenance. My focus is on clean code, excellent user experience, and solutions that grow with your needs.",
    "Custom web applications, full-stack development, UI/UX implementation - I handle all aspects of web development. If you have a vision, I can help bring it to life with cutting-edge technology!",
  ],
  experience: [
    "Over the years, I've worked on diverse projects that have honed my skills in full-stack development. I've collaborated with teams, managed projects independently, and always prioritized delivering value and quality to clients and users.",
    "My experience spans building features for high-traffic applications, optimizing performance, implementing complex business logic, and mentoring junior developers. Every project has been a learning opportunity!",
  ],
  hiring: [
    "I'm open to new opportunities! Whether it's a full-time role, freelance project, or exciting startup adventure, I'm interested in positions where I can grow and contribute meaningfully. Feel free to reach out through the contact form!",
    "Absolutely! I'm actively looking for exciting projects and opportunities. If you're interested in working together or have a project in mind, let's talk! Use the contact form to get in touch.",
  ],
  technologies: [
    "My go-to tech stack: React for interactive UIs, Node.js for backend services, MongoDB for databases, and Tailwind CSS for beautiful styling. I also work with Python for automation and various other tools based on project requirements.",
    "For frontend development, I prefer React with Tailwind CSS for rapid, responsive UI development. On the backend, Node.js and Express are my weapons of choice. For data, MongoDB is my usual go-to, though I adapt based on requirements.",
  ],
  default: [
    "That's an interesting question! While I might not have specific details about that topic, I'd recommend exploring the different sections of this portfolio or reaching out through the contact form for more detailed information. Is there anything else I can help with?",
    "I'm not entirely sure about that, but I'd love to help! You might find more information in the relevant portfolio sections, or feel free to ask me something more specific. What else would you like to know?",
    "Great question! I don't have all the details on that particular topic, but you can learn more by exploring the portfolio or getting in touch directly. What other questions do you have?",
  ],
};

const keywords = {
  greeting: ["hi", "hello", "hey", "greetings", "start", "beginning", "welcome", "what's up", "sup"],
  about: ["about", "who are you", "tell me about", "introduce", "yourself", "profile", "background", "who"],
  skills: ["skills", "expertise", "technologies", "tech stack", "languages", "proficient", "know", "experience", "what do you know", "technical", "capable"],
  projects: ["projects", "portfolio", "work", "case studies", "built", "created", "developed", "show me", "what have you"],
  contact: ["contact", "reach", "email", "message", "connect", "touch", "get in touch", "how to contact", "reach out", "hire"],
  services: ["services", "offer", "help with", "can you", "do you", "freelance", "available"],
  experience: ["experience", "worked on", "background", "journey", "history", "years", "how long"],
  hiring: ["hire", "hiring", "opportunity", "job", "work with", "freelance", "collaborate"],
  technologies: ["react", "node", "mongodb", "javascript", "python", "tech", "tools", "framework"],
};

function getRandomResponse(responseArray) {
  return responseArray[Math.floor(Math.random() * responseArray.length)];
}

function detectIntent(userMessage) {
  const message = userMessage.toLowerCase().trim();

  // More sophisticated keyword matching with scoring
  const intentScores = {};
  
  for (const [intent, keywordList] of Object.entries(keywords)) {
    intentScores[intent] = 0;
    keywordList.forEach((keyword) => {
      if (message.includes(keyword)) {
        intentScores[intent] += keyword.length; // Longer keywords have more weight
      }
    });
  }

  // Find the intent with the highest score
  let bestIntent = "default";
  let bestScore = 0;
  
  for (const [intent, score] of Object.entries(intentScores)) {
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestIntent;
}

function generateContextualResponse(userMessage, intent) {
  const message = userMessage.toLowerCase();
  
  // Check for specific variations to provide more targeted responses
  if (message.includes("react") || message.includes("frontend")) {
    return "React is my primary frontend framework! I love building interactive user interfaces with React, leveraging hooks, context, and modern patterns for clean, maintainable code. Are you interested in React development?";
  }
  
  if (message.includes("node") || message.includes("backend")) {
    return "Node.js is my go-to for backend development. I build scalable server applications with Express, handle databases with MongoDB, and create RESTful APIs. Backend development is where I ensure applications are robust and efficient!";
  }
  
  if (message.includes("price") || message.includes("cost") || message.includes("rate")) {
    return "For project pricing and rate details, I'd recommend reaching out through the Contact form. Rates vary depending on project scope, complexity, and timeline. Let's discuss your specific needs!";
  }
  
  if (message.includes("availability") || message.includes("when can you start")) {
    return "I'm excited to discuss new projects! For availability and timeline details, please reach out through the Contact form. We can discuss your project timeline and find the perfect fit!";
  }

  return null; // Return null to use default response from the intent
}

export async function getBotResponse(userMessage) {
  // Simulate API delay (makes it feel more natural)
  await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));

  if (!userMessage.trim()) {
    return "I didn't receive a message. Could you please rephrase that?";
  }

  const intent = detectIntent(userMessage);
  
  // Try to get contextual response first
  const contextualResponse = generateContextualResponse(userMessage, intent);
  if (contextualResponse) {
    return contextualResponse;
  }

  // Fall back to intent-based responses
  return getRandomResponse(responses[intent]);
}
