export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center space-y-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/harshkanjariya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-kanjariya-276693176"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:code.harshkanjariya@gmail.com"
            className="text-white hover:text-blue-400"
          >
            Email
          </a>
        </div>

        <div className="text-sm">
          <p>© 2025 Harsh Kanjariya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
