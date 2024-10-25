import {  Github, Linkedin,Twitter, Mail } from 'lucide-react';


const HeroHeader = () => {
    const skills = [
      'React', 'Node.js', 'Next.js', 'Tailwind CSS', 
      'TypeScript', 'Prisma', 'MongoDB'
    ];
  
    const socialLinks = [
        { Icon: Github, href: 'https://github.com/ankit-369', label: 'GitHub' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/ankit-b05378211', label: 'LinkedIn' },
        { Icon: Twitter, href: 'https://x.com/_x_ankit', label: 'Twitter' },
        { Icon: Mail, href: 'mailto:ankitkuchara420@gmail.com', label: 'Email' }

      ];
    return (
      <header className="relative  bg-[#0B192C] overflow-hidden" id='about'>
        {/* Geometric Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#FF6500" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)"/>
            </svg>
          </div>
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <div className="text-[#FF6500] font-mono mb-4">Hi there, I'm</div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Ankit Kuchara
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-[#1E3E62]">
                  Full-Stack Developer
                </h2>
              </div>
  
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Ambitious web developer passionate about programming and innovative solutions. Eager to apply my skills, tackle new challenges, and grow within a dynamic environment while contributing to impactful projects.
              </p>
  
              <div className="space-y-3">
                <h3 className="text-[#FF6500] font-mono text-lg">Education</h3>
                <div className="bg-[#1E3E62]/20 border border-[#1E3E62] rounded-lg p-4 space-y-2">
                  <div className="text-white font-semibold">Bachelor of Computer Applications (BCA)</div>
                  <div className="text-white/70">Silver Oak University, Ahmedabad, Gujarat</div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Graduation: July 2024</span>
                    <span className="text-[#FF6500] font-mono">CGPA: 9.14</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-[#1E3E62]/20 border border-[#1E3E62] rounded-md text-white/80 hover:border-[#FF6500]/50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
  
              <div className="flex gap-6">
              {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target='_blank'
                    className="group relative p-3 rounded-lg bg-[#1E3E62]/10 border border-[#1E3E62]/30 hover:border-[#FF6500]/50 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-[#FF6500] transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
  
            {/* Right Column - Profile Image */}
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-[#1E3E62] rounded-lg transform rotate-12" />
                <div className="absolute -inset-4 border-2 border-[#FF6500]/30 rounded-lg transform -rotate-6" />
                
                {/* Image Container */}
                <div className="relative rounded-lg overflow-hidden bg-[#1E3E62]/20 backdrop-blur-sm border border-[#1E3E62]/30">
                  <img
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    src="/myimage.jpeg"
                    alt="Ankit Kuchara"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 to-transparent" />
                </div>
              </div>
            </div>
          </div>
  
        
        </div>
      </header>
    );
  };

  export default HeroHeader;