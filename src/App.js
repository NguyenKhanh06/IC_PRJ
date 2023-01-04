import logo from './logo.svg';
import './App.css';
import Home from './pages/students/Home';
import Messenger from './pages/chat/Messenger';

function App() {
  return (
    <div className="App">
      <Home/>
      <Messenger/>
    </div>
  );
}

export default App;
