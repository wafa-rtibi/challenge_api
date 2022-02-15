import { Route, Routes, useNavigate } from 'react-router-dom';
import './style/App.css';
import Error from './components/Error';
import Home from './components/Home';
import Users from './components/Users';
import Profil from './components/Profil'
import {Navbar,Container,Nav} from 'react-bootstrap';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">API</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/users")}>Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/users/:id" element={<Profil/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
