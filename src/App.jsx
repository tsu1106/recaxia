
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Header from './components/Header';
import ClientAcc from './client/ClientAcc.jsx'
import CompanyAcc from './company/CompanyAcc.jsx'
import Signin from "./pages/signin.jsx";
import Signup from "./pages/Signup.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Home" element={<Home />} />

    
      <Route path="/signin/" element={<Signin />} />
      <Route path="/signup/" element={<Signup/>} />

      <Route element={<ProtectedRoute />}>
        <Route path="/Client" element={<ClientAcc/>} />
        <Route path="/Company" element={<CompanyAcc/>} />
      </Route>
    </Routes>
      
    </>
  );
}

export default App;