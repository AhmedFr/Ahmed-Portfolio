import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './Styles/index.scss'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
