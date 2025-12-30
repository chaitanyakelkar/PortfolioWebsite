function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', iconType: 'devicon', url: 'https://linkedin.com/in/chaitanya-kelkar/' },
    { name: 'GitHub', icon: 'github', iconType: 'devicon', url: 'https://github.com/chaitanyakelkar' },
    { name: 'Leetcode', icon: 'leetcode', iconType: 'devicon', url: 'https://leetcode.com/u/chaitanyaakelkar57/' },
    { name: 'Email', icon: 'mail', iconType: 'lucide', url: 'mailto:chaitanyaakelkar57@gmail.com' }
  ];

try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <div className="flex gap-6 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all"
                  aria-label={social.name}
                >
                  {social.iconType === 'devicon' ? (
                    <i className={`devicon-${social.icon}-${social.icon === 'github' ? 'original' : 'plain'} text-2xl text-gray-300`}></i>
                  ) : (
                    <div className={`icon-${social.icon} text-xl text-gray-300`}></div>
                  )}
                </a>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm text-center">
              © 2025 Chaitanya Kelkar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
