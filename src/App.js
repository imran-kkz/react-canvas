import JokeApp from './JokeApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Joke App
      </header>
      <div className="Joke">
        <JokeApp
          joke={{
            question:"",
            joke:"beat"}}/>
        <JokeApp
          joke={{
            question:"The first time I realized",
            joke:"I was living in this world"}}/>
        <JokeApp
          joke={{
            question:"I was probably looking at the sky",
            joke:"And forgive me but I dont know"}}/>
        <JokeApp
          joke={{
            question:"If I remember what to say",
            joke:"beat"}}/>
        <JokeApp
          joke={{
            question:"",
            joke:"What the air was really like that day"}}/>
      </div>
    </div>
  );
}

export default App;
