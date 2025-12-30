function Resume() {
  try {
    return (
      <section id="resume" className="section-padding bg-[var(--bg-light)]" data-name="resume" data-file="components/Resume.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">Resume</h2>
          
          <div className="max-w-3xl mx-auto bg-[var(--bg-white)] p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Education & Experience</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                Currently pursuing Computer Engineering (2022–2026) with strong foundation in full stack 
                development and backend engineering. Completed internship at Elite Software working on 
                Django-based e-commerce platform development.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                My experience includes building scalable REST APIs, implementing authentication systems, 
                integrating payment gateways, and developing full-stack applications using MERN stack and Python frameworks.
              </p>
            </div>

            <div className="text-center">
              <a
                href="../public/resource/resume/Chaitanya_Kelkar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <div className="icon-download text-xl"></div>
                Download Resume
              </a>
              <p className="mt-4 text-sm text-[var(--text-secondary)] hidden">
                Note: Place your resume PDF at <code className="bg-[var(--bg-light)] px-2 py-1 rounded">Chaitanya_Kelkar_Resume.pdf</code>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Resume component error:', error);
    return null;
  }
}