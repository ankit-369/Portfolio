import { useState } from 'react';
import { Menu, X} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="fixed w-full bg-[#0B192C]/95 backdrop-blur-sm border-b border-[#1E3E62]/20 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 py-4 md:px-12">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-[#FF6500]">Ankit</div>
              <div className="h-6 w-px bg-[#1E3E62]" />
              <div className="text-lg font-light text-white/80">Developer</div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Experience','Projects','Services'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="text-white/80 hover:text-[#FF6500] transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6500] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
  
            <button
              className="md:hidden text-white/80 hover:text-[#FF6500] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
  
          {isOpen && (
            <div className="md:hidden bg-[#0B192C] border-t border-[#1E3E62]/20">
              {['Experience','Projects','Services'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-3 text-white/80 hover:bg-[#1E3E62]/10 hover:text-[#FF6500] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  };
export default Navbar;
