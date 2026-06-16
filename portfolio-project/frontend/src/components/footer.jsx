export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Rupesh Ghale. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
}