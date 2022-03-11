import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import UserList from './Pages/UserList';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<UserList/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
