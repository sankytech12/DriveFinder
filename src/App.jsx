import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CarList } from "./components/CarList/CarList";
import Json from "./MockData.json";

function App() {
  const carData = Json;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/page/:pageNumber"
            element={<CarList carData={carData} />}
          />
          <Route exact path="/" element={<CarList carData={carData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
