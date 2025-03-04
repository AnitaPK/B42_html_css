import logo from './logo.svg';
import './App.css';
import data from './data'
import CardList from './components/CardList'

function App() {
  return (
    <>
    <CardList data={data}/>
    </>
  );
}

export default App;
