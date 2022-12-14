// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './Component/Team';
import Front from './Component/Front';


function App() {
  return (<>

    <Router>

      <Routes>
        <Route path='/' element={<Front />} />
        <Route path='/team' element={<Team />}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
