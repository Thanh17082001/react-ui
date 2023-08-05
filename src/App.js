import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { publicRoutes } from "./routes";
import Header from "./components/layouts/Header/header";
import './components/GlobalStyle.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Header>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
        </Header>
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={<route.component/>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
