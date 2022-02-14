import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import { Home } from './components/Home';
import { Game } from './components/Game';
import { Info } from './components/Info';




function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
