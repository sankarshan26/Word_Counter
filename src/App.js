import React from "react"; 
import 'bootstrap/dist/css/bootstrap.css'; 
import BootstrapContainer from "react-bootstrap/Container";
import WordCounter from "./WordCounter";

function App() {

  return (
    <BootstrapContainer>
      <h1 style={{"text-align":"center","margin-top":"1rem"}} className="text-primary">Word Counter</h1>
      <WordCounter />
    </BootstrapContainer>
  );
}

export default App;
