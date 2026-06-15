import { useState } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const initialState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${apiUrl}/contact`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData(initialState);
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      if (apiErrors) {
        const formatted = {};
        Object.keys(apiErrors).forEach((key) => (formatted[key] = apiErrors[key][0]));
        setErrors(formatted);
      }
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted text-center mb-10">
          Have a project in mind or just want to say hi? Fill out the form below.
        </p>

        {status.message && (
          <div className={`mb-6 p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50 text-green-300'
              : 'bg-red-500/20 border border-red-500/50 text-red-300'
          }`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-muted mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-primary transition"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm text-muted mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-primary transition"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm text-muted mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-primary transition"
              placeholder="What is this about?"
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm text-muted mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-primary transition resize-none"
              placeholder="Your message here..."
            ></textarea>
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-primary text-bg font-semibold hover:opacity-90 disabled:opacity-50 transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
            <label className="block text-sm text-muted mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-primary transition"
              placeholder="Subject"
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm text-muted mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-surface border border-white/10 text-white focus:outline-none focus:border-primary transition resize-none"
              placeholder="Your message..."
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-bg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <p className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}