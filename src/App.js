import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import { About } from './components/About';
import { Game } from './components/Game';
import './App.css';





function App() {
  return (
    <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;