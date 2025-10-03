export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-8 border-t border-slate-200 dark:border-slate-700">
      <div className="text-center text-slate-600 dark:text-slate-300">
        <p>&copy; 2024 Jessica Zhang. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a 
            href="https://github.com/jessicazhang" 
            className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/jessicazhang" 
            className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:jessica@example.com" 
            className="hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
