import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AWS Intern",
    company: "F13 Technologies",
    duration: " Ongoing",
    description: [
      "Assisting in the deployment and management of cloud infrastructure on AWS.",
      "Gaining hands-on experience with AWS services such as EC2, S3, Lambda, and CloudFormation.",
      "Collaborating with the DevOps team to implement best practices for cloud security and cost optimization."
    ]
  },
  {
    role: "Cloud DevOps Intern",
    company: "Mavenly",
    duration: "September 2025 – October 2026",
    description: [
      "Assisted in designing, implementing, and maintaining CI/CD pipelines using Jenkins and GitHub Actions.",
      "Worked on infrastructure automation using Terraform and managed containerized applications with Docker and Kubernetes.",
      "Collaborated with cross-functional teams to deploy and monitor cloud-based solutions on AWS and Azure."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
