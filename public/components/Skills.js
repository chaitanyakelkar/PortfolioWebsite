function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: 'code',
      skills: ['Python', 'Java', 'JavaScript']
    },
    {
      title: 'Technologies & Frameworks',
      icon: 'globe',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Django', 'Flask']
    },
    {
      title: 'Databases',
      icon: 'database',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Deployment & Tools',
      icon: 'wrench',
      skills: ['Git', 'Vercel']
    },
    {
      title: 'Problem Solving',
      icon: 'award',
      skills: ['HackerRank', 'LeetCode']
    }
  ];

  try {
    return (
      <section id="skills" className="section-padding bg-[var(--bg-light)]" data-name="skills" data-file="components/Skills.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-[var(--bg-white)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                  <div className={`icon-${category.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[var(--bg-light)] text-[var(--text-secondary)] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}