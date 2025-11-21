import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import ShowEmployees from './ShowEmployees';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowEmployees />} />
        <Route path="/show" element={<ShowEmployees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/update" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}


export default App;
