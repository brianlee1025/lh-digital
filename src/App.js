import React from "react";
import "./App.css";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import Achievements from "./section/Achievements/Achievements";
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
      <Achievements></Achievements>
    </div>
  );
}

export default App;
