import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cricket Score Prediction",
    description: "A beautiful Streamlit landing page for score predictions using Machine Learning Algorithms.",
    image: "/projects/image.png",
    tags: ["Python", "Machine Learning", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/cricketscoreprediction",
  },
  {
    id: 2,
    title: "Room Occupancy Prediction",
    description:
      "Interactive analytics with data visualization and filtering capabilities,where the number of occupancies based on the sensor data.",
    image: "/projects/image copy.png",
    tags: ["Python ","HTML"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/predictiveanalytics",
  },
  {
    id: 3,
    title: "Inventory Management System ",
    description:
      "Full-featured inventory management platform with user authentication and payment processing.",
    image: "/projects/image copy 2.png",
    tags: ["React", "Node.js", "Angular","Typescript","MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/inventory-management-prp-",
  },
  {
    id: 4,
    title: "Chatbot-NLP ",
    description:
      "Intelligent chatbot powered by NLP for human-like conversations and automated query handling.",
    image: "/projects/image copy 3.png",
    tags: ["NLP", "Tensorflow","Python", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/chatbot-nlp",
  },
  {
    id: 5,
    title: "Injury Prediction System For Soccer",
    description:
      "Machine learning model to forecast injury risk in soccer players using workload and performance data",
    image: "/projects/image copy 4.png",
    tags: ["Machine Learning","Python", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/injury-prediction-for-soccer",
  },
  {
    id: 6,
    title: "Employee attrition and Performance",
    description:
      "HR analytics platform leveraging ML to forecast employee turnover and evaluate performance metrics.",
    image: "/projects/image copy 5.png",
    tags: ["Predictive Analytics","Machine Learning", "Python","Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/ibm-hr-analytics",
  },
  {
    id: 7,
    title: "Language Transalator",
    description:
      "Multilingual text-translation system using Python and ML to convert and localize content across diverse languages in real time.",
    image: "/projects/image copy 6.png",
    tags: ["Machine Learning" ,"flask","Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/rithishvellingiri/language-translator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rithishvellingiri"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
