import './App.css';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <List categories={categories}/>
    </div>
  );
}

let categories = ["shirts", "hats", "shoes"];

export default App;
