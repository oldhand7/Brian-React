import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Header } from "../components";
import routes from "../routes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} Component={item.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
