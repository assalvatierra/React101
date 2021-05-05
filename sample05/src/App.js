import './App.css';
import Navi from './Navi';
import CarList from './Components/carList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <Navi />
      </header>

      <div>
        <h1>Car List</h1>
        <CarList />
      </div>
    </div>
  );
}

export default App;
