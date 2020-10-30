import './JokeApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Joke App
      </header>
      <JokeApp
        joke={{
          question:"Why did the chicken cross the road?",
          joke:"because it did"}}/>
    </div>
  );
}

export default App;
