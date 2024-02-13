import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import HomePage from './components/homepage';

function App() {
  return (
    <Router>
      <Routes App>
        <Route path={process.env.PUBLIC_URL + "/"} element={<HomePage />}></Route>
        <Route path={process.env.PUBLIC_URL + "/login"} element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
