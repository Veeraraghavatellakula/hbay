import annapic from './annapic1.jpeg';
import './App.css';

function App() {
  return (
    <div
      className="App-header"
      style={{
        backgroundImage: `url(${annapic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      <img src={annapic} className="App-logo" alt="logo" />
      <h5> May all your dreams come true.  Wishing you endless happiness</h5>
      <h3>On this special day, May your day be filled with joy, 
      laughter, and unforgettable moments. Here's to another amazing year ahead✨🎉</h3>
      
      <h1 style={{ color: 'red' }}> Happy Birthday Supporter! 💖</h1>

    </div>
  );
}

export default App;
