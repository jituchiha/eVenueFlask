import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import Home from './Home'
import Navbar from './Navbar'
import SearchPage from './SearchPage'
import Profile from './Profile';
import EditProfile from './EditProfile';

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
              <Route path ='/Search' element={<SearchPage/>}/>
              {/* <Route path = '/' element={<Profile/>} /> */}
              {/* <Route path = '/Activites' element={<Activities />} />
              <Route path = 'Sports' elemetn = {<SportsPage/>} /> */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
