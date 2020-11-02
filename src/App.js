import JokeApp from './JokeApp';
import './App.css';
import './jokesData'
import jokesData from './jokesData';

function App() {
  const jokesComponents = jokesData.map((joke)=> {
    return (
      <JokeApp question={joke.question} joke={joke.joke}/>
    )
  })
  return (
    <div>
      {jokesComponents}
    </div>
  )
}

export default App;
