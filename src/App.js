import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Styles/index.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
