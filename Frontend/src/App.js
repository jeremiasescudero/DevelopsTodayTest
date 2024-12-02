import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './Components/CountryList';
import CountryInfo from './Components/CountryInfo';



function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<CountryList/>}  />
          <Route path='/countries/:countryCode' element={<CountryInfo/>}  />
      </Routes>

    </Router>

  );
}

export default App;
