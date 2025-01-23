import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#why-us';
    } else {
      document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://j.top4top.io/p_331018hze1.png" 
              alt="Logo" 
              className="w-16 h-16" 
            />
            <span className={`mr-3 text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } group-hover:text-sky-500`}>
              آفاق أكاديمي
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-5 py-2.5 rounded-lg text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-sky-500 hover:bg-sky-50' 
                  : 'text-white hover:text-white hover:bg-white/10'
              } ${location.pathname === '/' ? 'font-bold' : ''}`}
            >
              الرئيسية
            </Link>
            <Link
              to="/grades"
              className={`px-5 py-2.5 rounded-lg text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-sky-500 hover:bg-sky-50' 
                  : 'text-white hover:text-white hover:bg-white/10'
              } ${location.pathname === '/grades' ? 'font-bold' : ''}`}
            >
              المراحل الدراسية
            </Link>
            <a
              href="#why-us"
              onClick={handleAboutClick}
              className={`px-5 py-2.5 rounded-lg text-lg transition-all duration-300 cursor-pointer ${
                isScrolled 
                  ? 'text-gray-600 hover:text-sky-500 hover:bg-sky-50' 
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              عن المنصة
            </a>
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-lg text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-sky-500 hover:bg-sky-50' 
                  : 'text-white hover:text-white hover:bg-white/10'
              } ${location.pathname === '/contact' ? 'font-bold' : ''}`}
            >
              تواصل معنا
            </Link>
            <Link 
              to="/register" 
              className={`px-6 py-2.5 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 shadow-md hover:shadow-lg'
                  : 'bg-white text-sky-600 hover:bg-sky-50 shadow-lg'
              }`}
            >
              تسجيل الدخول
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`px-4 py-2 text-lg ${
                  location.pathname === '/'
                    ? 'text-sky-500 font-bold'
                    : 'text-gray-600 hover:text-sky-500'
                }`}
              >
                الرئيسية
              </Link>
              <Link
                to="/grades"
                className={`px-4 py-2 text-lg ${
                  location.pathname === '/grades'
                    ? 'text-sky-500 font-bold'
                    : 'text-gray-600 hover:text-sky-500'
                }`}
              >
                المراحل الدراسية
              </Link>
              <a
                href="#why-us"
                onClick={handleAboutClick}
                className="px-4 py-2 text-lg text-gray-600 hover:text-sky-500"
              >
                عن المنصة
              </a>
              <Link
                to="/contact"
                className={`px-4 py-2 text-lg ${
                  location.pathname === '/contact'
                    ? 'text-sky-500 font-bold'
                    : 'text-gray-600 hover:text-sky-500'
                }`}
              >
                تواصل معنا
              </Link>
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-3 rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all text-center shadow-md hover:shadow-lg"
              >
                تسجيل الدخول
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}