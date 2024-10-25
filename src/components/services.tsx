import { Code2, Server, Layout, Database, Cloud } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Layout,
            title: 'Frontend Development',
            description: 'Responsive web applications with modern UI/UX using React, Next.js, and Tailwind CSS'
        },
        {
            icon: Server,
            title: 'Backend Development',
            description: 'Scalable server-side solutions with Node.js, Express, and REST APIs'
        },
        {
            icon: Database,
            title: 'Database Design',
            description: 'Efficient database architecture using MongoDB, Prisma, and SQL'
        },
        {
            icon: Code2,
            title: 'Full-Stack Integration',
            description: 'End-to-end web application development with seamless frontend-backend integration'
        },
        {
            icon: Cloud,
            title: 'Cloud Deployment',
            description: 'Application deployment and hosting on cloud platforms'
        }
    ];

    return (
        <section className="bg-[#0B192C] py-20" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">What I Offer</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Specialized in building modern web applications with a focus on performance,
                        scalability, and user experience.
                    </p>
                </div>

                {/* Container for all services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* First three services */}
                    {services.slice(0, 3).map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-[#1E3E62]/20 border border-[#1E3E62] rounded-lg hover:border-[#FF6500]/50 transition-colors duration-300"
                        >
                            <service.icon className="w-12 h-12 text-[#FF6500] mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-white/70">{service.description}</p>
                        </div>
                    ))}

                    {/* Last two services in a centered container */}
                    <div className="lg:col-span-3 lg:flex lg:justify-center lg:gap-8 gap-y-8">
                        {services.slice(3).map((service, index) => (
                            <div
                                key={index + 3}
                                className={`p-6 bg-[#1E3E62]/20 border border-[#1E3E62] rounded-lg hover:border-[#FF6500]/50 transition-colors duration-300 md:max-w-md lg:w-1/3 ${index === 1 ? 'mt-8 lg:mt-0' : ''}`}
                            >
                                <service.icon className="w-12 h-12 text-[#FF6500] mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-white/70">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;