import { Container } from "./style/App.style";
import SideBar from "../src/components/Sidebar";
import Board from "../src/components/Board";

function App() {
  return (
    <div>
      <Container>
        <SideBar />
        <Board />
      </Container>
    </div>
  );
}

export default App;
