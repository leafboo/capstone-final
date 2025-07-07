import { Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Workspace from "./pages/Workspace"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/workspace" element={<Workspace></Workspace>} />
      </Routes>
    </>
  )
}

export default App
