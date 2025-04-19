// src/Day2_Task/App.jsx

import Header from './header';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className='App'>
        <h2>Welcome to Day 2 Task!</h2>
        <p>This is the main content area.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
