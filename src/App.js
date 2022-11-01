import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nabar from "./layout/Nabar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import Dashboard from "./pages/Dashboard";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Nabar />

        <Routes>
          <Route exat path="/" element={<Home />} />
          <Route exat path="/adduser" element={<AddUser/>}/>
          <Route exat path="/dashboard" element={<Dashboard/>}/>
          <Route exat path="/edituser/:id" element={<EditUser/>}/>
          <Route exat path="/viewuser/:id" element={<ViewUser/>}/>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
