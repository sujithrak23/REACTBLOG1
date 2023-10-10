import logo from './logo.svg';
import './App.css';
import Topbar from './NavBar/Topbar';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
