import JokeApp from './JokeApp';
import './App.css';
import jokesData from './jokesData';

function App() {
  const jokesComponents = jokesData.map(joke => <JokeApp key={joke.id} question={joke.question} answer={joke.answer}/>)
  return (
    <div className="App">
      <header className="App-header">App</header>
      {jokesComponents}
    </div>
  )
}

export default App;
