const skills = [
  { name: 'React.js', level: 90 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Laravel / PHP', level: 85 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'REST API Design', level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center md:text-left">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-surface rounded-xl p-5 border border-white/5">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-primary text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}