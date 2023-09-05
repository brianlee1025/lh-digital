import React from "react";
import "./App.css";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import Contact from "./section/Contact/Contact";
import Edge from "./section/Edge/Edge";
import Introduction from "./section/Introduction/Introduction";
import Services from "./section/Services/Services";
import Team from "./section/Team/Team";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Introduction></Introduction>
      <Services></Services>
      <Team></Team>
      <Edge></Edge>
      <Contact></Contact>
    </div>
  );
}

export default App;
