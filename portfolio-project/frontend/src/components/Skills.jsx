import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`${apiUrl}/portfolio`);
        setSkills(response.data.skills);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Failed to load skills');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <div className="py-20 text-center text-white">Loading...</div>;
  if (error) return <div className="py-20 text-center text-red-500">{error}</div>;

  return (
    <section id="skills" className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center md:text-left">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-surface rounded-lg p-6 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-primary font-bold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
