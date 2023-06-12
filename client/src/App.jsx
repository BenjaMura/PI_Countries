import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form, NotFound, Activities } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from 'react-redux';

function App() {
  const location = useLocation();
  const { loading } = useSelector((state) => state);
  return (
    <div className="App">
      {(location.pathname === "/home" ||
      location.pathname === "/create" ||
      location.pathname === "/activities" ||
      location.pathname.includes("/detail/")) &&
      (!loading) &&
      <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/create" element={<Form />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;