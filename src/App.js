
import './App.css';
import { Register } from './components/Register';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Register/>} />
      
     </Routes>
   </Router>
  );
}

export default App;
