import { ExternalLink,ScrollText, Github, ChevronRight, Layout } from 'lucide-react';

interface Project {
  title: string;
  liveUrl: string;
  description: string;
  githubUrl: string;
  features: string[];
  technologies: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {

  return (
    <div
      className="relative group bg-[#0B192C] border border-[#1E3E62]/30 rounded-lg overflow-hidden"
      
    >
      {/* Project Header */}
      <div className="p-8 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Layout className="w-5 h-5 text-[#FF6500]" />
            <h3 className="text-xl font-semibold text-white group-hover:text-[#FF6500] transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="text-white/60 hover:text-[#FF6500] transition-colors duration-300 cursor-pointer"
                aria-label="View Source"
                target="_blank" // Added to open in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <a
              href={project.liveUrl}
              className="text-white/60 hover:text-[#FF6500] transition-colors duration-300 cursor-pointer"
              aria-label="Visit Site"
              target="_blank" // Added to open in a new tab
              rel="noopener noreferrer" // Security best practice
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-white/70 mb-6">{project.description}</p>

        {/* Features List */}
        <div className="space-y-3">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-[#FF6500] flex-shrink-0 mt-1" />
              <span className="text-white/70">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="px-8 py-6 border-t border-[#1E3E62]/30 bg-[#1E3E62]/5">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-white/60 bg-[#1E3E62]/20 rounded-full
                hover:text-[#FF6500] hover:bg-[#1E3E62]/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

{/* Hover Effect */}
<div
    className="absolute inset-0 border-2 border-[#FF6500] rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
  />
     
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Kudos Vault',
      liveUrl: 'https://kudos-vault.ankytt.tech',
      githubUrl: 'https://github.com/ankit-369/get-reviews',
      description:
        'A comprehensive testimonial management system that streamlines the process of collecting and showcasing customer reviews.',
      features: [
        'Testimonial Submission: Easily integrate a customizable form on websites for collecting customer reviews.',
        'Review Management: Intuitive dashboard for viewing, managing, and interacting with testimonials.',
        'Flexible Integration: Access testimonial data in JSON format for seamless integration into websites.',
      ],
      technologies: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'AWS S3', 'Tailwind CSS'],
    },
    {
      title: 'YouTube Layer',
      liveUrl: 'https://youtubelayear.ankytt.tech',
      githubUrl: 'https://github.com/ankit-369/Youtube_layer1',
      description:
        'A streamlined platform for managing and uploading edited videos directly to YouTube with collaboration features.',
      features: [
        'One-Click Upload: Upload edited videos directly to YouTube from the dashboard.',
        'Instant Preview: Preview videos with titles and descriptions without downloading.',
        'Collaboration Code: Share a unique code for editors to manage and track video edits.',
        "Editor's Dashboard: Simple interface for editors to view and submit videos.",
        'Secure and Fast: Ensure secure management and rapid uploads for seamless collaboration.',
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    },
  ];

  return (
    <section className="relative py-20 bg-[#0B192C]" id="projects">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#FF6500" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-[#FF6500] font-mono"><ScrollText/></span>
            <h2 className="text-3xl font-bold text-white ml-4">Featured Projects</h2>
            <div className="h-px bg-[#1E3E62] flex-grow ml-6" />
          </div>
          <p className="text-white/60 max-w-2xl">
            A showcase of my recent development work, featuring full-stack applications and web solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard  project={project} />
          ))}
        </div>

        {/* More Projects Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/ankit-369"
            className="inline-flex items-center px-6 py-3 border-2 border-[#FF6500] text-[#FF6500] 
                     rounded hover:bg-[#FF6500]/10 transition-colors duration-300 space-x-2"
          >
            <span>View My Github</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
