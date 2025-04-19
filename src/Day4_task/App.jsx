import LikeButton from './LikeButton';
import ThemeToggle from './ThemeToggle';
import './App.css';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={`app-container ${dark ? 'dark' : 'light'}`}>
      <LikeButton />
      <ThemeToggle toggleTheme={toggleTheme} dark={dark} />
    </div>
  );
}

export default App;
