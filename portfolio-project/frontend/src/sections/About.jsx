export default function About() {
  return (
    <section id="about" className="py-20 bg-surface/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center md:text-left">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
            <p>
              I'm a passionate full-stack developer with 3+ years of experience building
              web applications. I specialize in React.js for crafting dynamic user
              interfaces and Laravel for building robust, scalable backend systems.
            </p>
            <p>
              I love solving complex problems, writing clean code, and continuously
              learning new technologies to deliver high-quality digital products.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg bg-primary text-bg font-semibold hover:opacity-90 transition"
            >
              Download Resume
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          <div className="bg-surface rounded-xl p-6 border border-white/5">
            <h3 className="text-white font-semibold mb-4">Quick Info</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><span className="text-primary font-medium">Location:</span> Kathmandu, Nepal</li>
              <li><span className="text-primary font-medium">Experience:</span> BIT Student</li>
              <li><span className="text-primary font-medium">Email:</span> rupesh404@gmail.com</li>
              <li><span className="text-primary font-medium">Available:</span> Open to work</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}