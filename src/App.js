import './App.css';
import './Joke.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Joke App
      </header>
      <Joke
        joke={{
          question:"Why did the chicken cross the road?",
          joke:"because it did"}}/>
    </div>
  );
}

export default App;
