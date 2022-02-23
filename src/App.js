import Home from "./pages/Home";
import MoreAbout from "./pages/MoreAbout";
import Error from "./pages/Error";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ContactMe from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="moreabout" element={<MoreAbout/>}/>
      <Route path="contact" element={<ContactMe/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
