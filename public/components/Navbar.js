function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  try {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-[var(--bg-white)] shadow-sm z-50" data-name="navbar" data-file="components/Navbar.js">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-[var(--primary-color)]">Chaitanya Kelkar</div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-colors ${
                    activeSection === link.id 
                      ? 'text-[var(--primary-color)] font-medium' 
                      : 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--text-primary)]"
              >
                <div className={`icon-${isOpen ? 'x' : 'menu'} text-xl`}></div>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 px-4 text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-[var(--bg-light)]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}