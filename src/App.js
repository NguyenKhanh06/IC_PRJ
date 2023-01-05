import logo from './logo.svg';
import './App.css';
import Home from './pages/students/Home';
import Messenger from './pages/chat/Messenger';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Signin from './pages/Signin';
import Header from './components/header/Header';
import Admin from './pages/students/Admin';

function App() {
  return (
    <div className="App">
          

          <AuthContextProvider>
            <Messenger/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </AuthContextProvider>
    
    </div>
  );
}

export default App;
