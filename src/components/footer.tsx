import { Github, Linkedin, Twitter,Mail, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/ankit-369', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/ankit-b05378211', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://x.com/_x_ankit', label: 'Twitter' },
    { Icon: Mail, href: 'mailto:ankitkuchara420@gmail.com', label: 'Email' }

  ];
  return (

    <footer className="bg-[#0B192C] border-t border-[#1E3E62]/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Services'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-[#FF6500] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70">Ahmedabad, Gujarat</li>
              <li>
                <a 
                  href="mailto:ankitkuchara420@gmail.com" 
                  className="text-white/70 hover:text-[#FF6500] transition-colors duration-200"
                >
                  ankitkuchara420@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg bg-[#1E3E62]/10 border border-[#1E3E62]/30 hover:border-[#FF6500]/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white/70 hover:text-[#FF6500]" />
                </a>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resume</h4>
            <a
              href="https://docs.google.com/document/d/1IxfdpGSYbtAnM0JL5q9ikhIwPLqgaz1grPkM6p_M1zo/edit?tab=t.0"
              className="inline-flex items-center px-4 py-2 bg-[#FF6500]/20 border border-[#FF6500]/50 rounded-lg text-[#FF6500] hover:bg-[#FF6500]/30 transition-colors duration-300"
            >
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1E3E62]/30 text-center">
          <p className="text-white/50">
            © {currentYear} Ankit Kuchara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;