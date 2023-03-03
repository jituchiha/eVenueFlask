import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Login' element= {<LoginPage/>} />
              <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
              <Route path ='/Register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
