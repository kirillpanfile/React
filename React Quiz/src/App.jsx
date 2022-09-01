import initServer from "./api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Quiz } from "./views";
function App() {
  initServer();
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
