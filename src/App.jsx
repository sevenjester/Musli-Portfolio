import { Route, BrowserRouter as Router, Routes } from "react-router-dom" ;
// eslint-disable-next-line no-unused-vars
import Navbar from "./component/navbar";
import {Home, About, Project, Contact} from "./pages";
const App = () => {
  return (
    <main className="bg-slate-300/20 font-bold" >
      <Router>
         <Navbar />
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
         </Routes>
      </Router>
    </main>
  )
}

export default App