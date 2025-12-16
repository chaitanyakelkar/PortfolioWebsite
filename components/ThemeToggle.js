function ThemeToggle() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  try {
    return (
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-lg bg-[var(--bg-light)] flex items-center justify-center hover:opacity-80 transition-opacity"
        aria-label="Toggle theme"
        data-name="theme-toggle"
        data-file="components/ThemeToggle.js"
      >
        <div className={`icon-${theme === 'light' ? 'sun' : 'moon'} text-xl text-[var(--primary-color)]`}></div>
      </button>
    );
  } catch (error) {
    console.error('ThemeToggle component error:', error);
    return null;
  }
}