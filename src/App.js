import annapic from './annapic1.jpeg';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <img src={annapic} className="App-logo" alt="logo" />
      <div className="App-message">
      <h1 style={{ color: 'Forest Green' }}>Happy Birthday Supporter! 😍💖</h1>
        <h3 style={{ color: 'Teal' }}>
          On this special day, may your day be filled with joy, laughter, and unforgettable
          moments. Here's to another amazing year ahead ✨🎉
        </h3>
        
        <h5 style={{ color: 'Teal' }}>May all your dreams come true. Wishing you endless happiness</h5>
      </div>
    </div>
  );
}

export default App;
