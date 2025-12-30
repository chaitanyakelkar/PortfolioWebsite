function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  try {
    return (
      <section id="home" className="section-padding pt-32" data-name="hero" data-file="components/Hero.js">
        <div className="container-custom text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-blue-600 p-1">
              <img
                src="..public//resource/profilephoto/profilephoto.JPG"
                alt="Chaitanya Kelkar"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]">
            Chaitanya Kelkar
          </h1>
          
          <p className="text-lg text-[var(--text-secondary)] mb-2">
            Pune, Maharashtra, India
          </p>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
            Computer Engineering Student | Full Stack Developer | Python & MERN Stack
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://linkedin.com/in/chaitanya-kelkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--secondary-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors group"
              aria-label="LinkedIn"
            >
              <i className="devicon-linkedin-plain text-2xl text-[var(--primary-color)] group-hover:text-white"></i>
            </a>
            <a
              href="https://github.com/chaitanyakelkar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--secondary-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors group"
              aria-label="GitHub"
            >
              <i className="devicon-github-original text-2xl text-[var(--primary-color)] group-hover:text-white"></i>
            </a>
            <a
              href="https://leetcode.com/u/chaitanyaakelkar57/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--secondary-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors group"
              aria-label="LeetCode"
            >
              <i className="devicon-leetcode-plain text-xl text-[var(--primary-color)] group-hover:text-white"></i>
            </a>
            <a
              href="mailto:chaitanyaakelkar57@gmail.com"
              className="w-12 h-12 rounded-full bg-[var(--secondary-color)] flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors group"
              aria-label="Email"
            >
              <div className="icon-mail text-xl text-[var(--primary-color)] group-hover:text-white"></div>
            </a>
          </div>
          
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            View Projects
            <div className="icon-arrow-down text-lg"></div>
          </button>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}