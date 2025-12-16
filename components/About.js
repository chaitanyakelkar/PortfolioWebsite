function About() {
  try {
    return (
      <section id="about" className="section-padding bg-[var(--bg-white)]" data-name="about" data-file="components/About.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              I am a Computer Engineering undergraduate (2022–2026) with strong interest in full stack web development 
              and backend engineering. I have hands-on experience building scalable REST APIs, authentication systems, 
              and integrating payment gateways. I enjoy solving problems and actively contribute to technical communities 
              as a student leader.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[var(--bg-white)] p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                  <div className="icon-code text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-semibold mb-2">Full Stack Development</h3>
                <p className="text-sm text-[var(--text-secondary)]">Building scalable web applications with MERN stack</p>
              </div>

              <div className="bg-[var(--bg-white)] p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                  <div className="icon-server text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-semibold mb-2">Backend Engineering</h3>
                <p className="text-sm text-[var(--text-secondary)]">REST APIs, authentication, and payment integrations</p>
              </div>

              <div className="bg-[var(--bg-white)] p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                  <div className="icon-award text-xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="font-semibold mb-2">Problem Solving</h3>
                <p className="text-sm text-[var(--text-secondary)]">Active on HackerRank and LeetCode platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}