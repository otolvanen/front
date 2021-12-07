import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cv from "./components/Cv";
import Palaute from "./components/Palaute";
import Tietoja from "./components/Tietoja";
import Etusivu from "./components/Etusivu";
import Navibar from "./components/Navibar";

import Urheilijat from "./components/projektit/Urheilijat";
import Sanakirja from "./components/projektit/Sanakirja";
function App() {
  return (
    <Router>
      <div className="App">
        <Navibar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/cv" exact element={<Cv />}>
                <Route path="/cv/sanakirja"  element={<Sanakirja />} />
                <Route path="/cv/urheilijat"  element={<Urheilijat />}/>

            </Route>
            <Route path="/tietoja" element={<Tietoja />}/>
            <Route path="/palaute" element={<Palaute />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;