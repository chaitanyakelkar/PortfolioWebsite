function About() {
  try {
    return (
      <section id="about" className="section-padding bg-[var(--bg-white)]" data-name="about" data-file="components/About.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              Computer Engineering graduate with excellent academic record. Proficient in Java, Python and
              JavaScript programming languages. Hands on experience in backend development using
              ExpressJS, Node.js and MongoDB. Passionate about solving real-world problems using
              technology.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
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