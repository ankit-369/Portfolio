import React from 'react';
import { Calendar, MapPin, ExternalLink, ChevronRight, MessageSquareCode } from 'lucide-react';
interface ExperienceCardProps {
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    skills: string[];
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({
    role,
    company,
    location,
    duration,
    description,
    skills,
}) => {
    return (
        <div className="relative group">
            {/* Decorative line */}
            <div className="absolute left-0 top-0 h-full w-px bg-[#1E3E62]/30 group-hover:bg-[#FF6500]/50 transition-colors duration-300" />

            <div className="pl-8 relative">
                {/* Decorative dot */}
                <div className="absolute left-0 top-6 w-2 h-2 rounded-full border-2 border-[#1E3E62] bg-[#0B192C] -translate-x-1 group-hover:border-[#FF6500] transition-colors duration-300" />

                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#FF6500] transition-colors duration-300">
                            {role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                            <div className="text-white/70">{company}</div>
                            <div className="flex items-center text-[#1E3E62]">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="text-sm">{location}</span>
                            </div>
                            <div className="flex items-center text-[#1E3E62]">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">{duration}</span>
                            </div>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        {description.map((item, index) => (
                            <li key={index} className="flex">
                                <ChevronRight className="w-5 h-5 mr-2 text-[#FF6500]/70 flex-shrink-0 mt-1" />
                                <span className="text-white/70">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-[#1E3E62]/10 border border-[#1E3E62]/30 
                         rounded text-white/60 hover:text-[#FF6500] hover:border-[#FF6500]/30 
                         transition-colors duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Web Developer Intern",
            company: "Sedani Digital Pvt.",
            location: "Ahmedabad, Gujarat",
            duration: "Jan 2023 - Sep 2023",
            description: [
                "Focused on building new backend features using PHP, developing web applications from the ground up.",
                "Occasionally handled frontend development tasks using Tailwind CSS, designing and implementing responsive user interfaces."
            ],
            skills: ["PHP", "Tailwind CSS", "Web Development", "UI Design", "Responsive Design"]
        }
        // You can add more experiences here following the same structure
    ];

    return (
        <section className="relative py-20 bg-[#0B192C]" id="experience">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#FF6500" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center mb-4">
                        <span className="text-[#FF6500] font-mono"><MessageSquareCode /></span>
                        <h2 className="text-3xl font-bold text-white ml-4">Experience</h2>
                        <div className="h-px bg-[#1E3E62] flex-grow ml-6" />
                    </div>
                    <p className="text-white/60 max-w-2xl">
                        My professional journey and the valuable experiences that have shaped my development career.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>

                {/* Download Resume Button */}
                <div className="mt-16 text-center">
                    <a
                        href="https://docs.google.com/document/d/1IxfdpGSYbtAnM0JL5q9ikhIwPLqgaz1grPkM6p_M1zo/edit?tab=t.0"
                        className="inline-flex items-center px-6 py-3 border-2 border-[#FF6500] text-[#FF6500] 
                     rounded hover:bg-[#FF6500]/10 transition-colors duration-300 space-x-2"
                    >
                        <span>View Full Resume</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;