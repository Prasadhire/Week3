import './App.css';

function ThemeToggle({ toggleTheme, dark }) {
  return (
    <div className="card">
      <h2>Toggle Theme</h2>
      <button onClick={toggleTheme} className="btn">
        {dark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

export default ThemeToggle;
