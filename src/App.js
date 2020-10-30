import JokeApp from './JokeApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Joke App
        <JokeApp
          joke={{
            question:"",
            joke:"because it did"}}/>
      </header>
    </div>
  );
}

export default App;
