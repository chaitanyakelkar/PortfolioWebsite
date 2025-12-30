function Projects() {
  const projects = [
    {
      title: 'Movie Ticket Booking Platform',
      description: 'Full-featured ticket booking system with secure authentication, payment processing, background jobs, and automated email notifications.',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Inngest', 'Clerk', 'Stripe', 'Brevo'],
      github: 'https://github.com/chaitanyakelkar/MovieTicketBooking',
      demo: 'https://mtb.chaitanyakelkar.me/'
    },
    {
      title: 'League On',
      description: 'Cricket-focused platform connecting players, teams, and organizers. Features player profiling, geolocation-based tournament discovery, performance statistics tracking, and merchant e-commerce integration. (Final Year Project – Work in Progress)',
      tech: ['React', 'Node.js', 'MongoDB', 'Maps API', 'Payment Gateway'],
      github: null,
      demo: null
    }
  ];

  try {
    return (
      <section id="projects" className="section-padding bg-[var(--bg-light)]" data-name="projects" data-file="components/Projects.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[var(--bg-white)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                    >
                      <div className="icon-github text-lg"></div>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <div className="icon-external-link text-lg"></div>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}