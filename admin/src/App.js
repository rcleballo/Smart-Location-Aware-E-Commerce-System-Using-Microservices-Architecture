import Topbar from "./Components/Topbar";
import styled from 'styled-components';
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <div>
      <Topbar />
      <Container>
        <Sidebar />
        <Home />
      </Container>
    </div>
  );
}

export default App;
