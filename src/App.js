import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import { About } from './components/About';
import { Game } from './components/Game';
import { Loading } from './components/Loading';
import './App.css';





function App() {
  return (
    <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;