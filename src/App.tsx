import { Container } from "./style/App.style";
import SideBar from "../src/components/Sidebar";
import Board from "../src/components/Board";
import Loading from "./components/loading";
import React, { useState } from "react";


function App() {

    const [open, setOpen] = useState(false);

    const togle = () => {
    setOpen((prev) => !prev);
    console.log(open)
    };


  return (
    <div>
      <Container>
        <Loading/>
        <SideBar open={open} togle={togle} />
        <Board togle={togle} />
      </Container>
    </div>
  );
}

export default App;
