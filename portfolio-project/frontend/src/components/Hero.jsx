export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-primary font-medium mb-3">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            John Doe
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted mt-2">
            I build things for the web.
          </h2>
          <p className="mt-4 text-muted max-w-md mx-auto md:mx-0">
            I'm a full-stack developer specializing in building exceptional digital
            experiences using React, Laravel, and modern web technologies.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-bg font-semibold hover:opacity-90 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1.5">
            <img
              src="https://via.placeholder.com/400x400.png?text=Avatar"
              alt="Profile avatar"
              className="w-full h-full object-cover rounded-full border-4 border-bg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}