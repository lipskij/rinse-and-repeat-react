import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar className='navabar'/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
