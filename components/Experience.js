function Experience() {
  const experiences = [
    {
      title: 'Python Django Intern',
      company: 'Elite Software',
      period: 'Dec 2024 – Jan 2025',
      location: 'Pune, India',
      description: [
        'Built backend modules for an end-to-end e-commerce platform',
        'Developed REST APIs using Django and MongoDB',
        'Integrated secure payment gateway and handled user flows',
        'APIs performed business-specific computations to enrich features'
      ]
    }
  ];

  try {
    return (
      <section id="experience" className="section-padding bg-[var(--bg-white)]" data-name="experience" data-file="components/Experience.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-[var(--bg-white)] p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                    <div className="icon-briefcase text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">{exp.title}</h3>
                    <p className="text-[var(--primary-color)] font-medium">{exp.company}</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {exp.period} | {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-[var(--text-secondary)] flex items-start gap-2">
                          <div className="icon-check text-sm text-[var(--primary-color)] mt-1"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}