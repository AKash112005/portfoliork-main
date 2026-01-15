import { Award } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "Scrum Basics",
      issuer: "Agile Scrum Foundation",
      link: "https://drive.google.com/file/d/13SkrlUtv6TKf0tAWTeyMYAOS3uhHUSNB/view?usp=sharing",
    },
    {
      name: "Agentforce Specialist ",
      issuer: "Salesforce",
      link: "https://drive.google.com/file/d/17NnEg_XnOHNyYyo35SkGSLJXTzmjJgB0/view?usp=drive_link",
    },
    {
      name: "Generative AI Fundamentals",
      issuer: "Databricks",
      link: "https://drive.google.com/file/d/1JIQ0qxEGImEG-eRqjQh4AyCWXuE1pHlf/view?usp=drive_link",
    },

    {
      name: "Databricks Fundamentals",
      issuer: "Databricks",
      link: "https://drive.google.com/file/d/1YEugparVryYn9c8ZuaibPPUOIeS2kdjy/view?usp=drive_link",
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      link: "https://drive.google.com/file/d/1RhWfjRGRTdAcYKZ8lxEprkm0gQBgpFaQ/view?usp=drive_link",
    },
    {
      name: "Introduction to cybersecurity",
      issuer: "Cisco ",
      link: "https://drive.google.com/file/d/1kT9QmRmS02dMqllRXYKx4C2J2mh48Tpb/view?usp=drive_link"
    },
    {
      name: "Artificial Intelligence",
      issuer: "Accenture",
      link: "https://drive.google.com/file/d/1u3ktn1MXE53b52-yq1RnyhJyZgkDbugl/view?usp=sharing"
    },
    {
      name: "Container On AWS",
      issuer: "AWS",
      link: "https://drive.google.com/file/d/1GZJpBK2uWy4FnPA0H-q6k8O16_dL8bQf/view?usp=drive_link"
    },
    {
      name: "Digital Sovereignty on AWS",
      issuer: "AWS",
      link: "https://drive.google.com/file/d/11BBkGptDpii2AKI0Y9KilT5co-NEt2AK/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover flex items-start gap-4"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">{cert.name}</h4>
                <p className="text-sm text-lg-400">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-400 underline hover:text-primary/80"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
