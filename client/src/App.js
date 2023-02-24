import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import Login from './Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
              <Route path ='/Register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
