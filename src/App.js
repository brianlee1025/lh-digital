import React, { useEffect } from "react";
import "./App.css";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import Clients from "./section/Clients/Clients";
import Contact from "./section/Contact/Contact";
import Edge from "./section/Edge/Edge";
import Footer from "./section/Footer/Footer";
import Introduction from "./section/Introduction/Introduction";
import Services from "./section/Services/Services";
import Team from "./section/Team/Team";

function App() {
  useEffect(() => {
    if (
      window.location.hostname === "lighthouse-digital.web.app" ||
      window.location.hostname === "lighthouse-digital.firebaseapp.com"
    ) {
      window.location.href = "https://lighthousedigital.xyz";
    }
  }, []);

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Introduction></Introduction>
      <Services></Services>
      <Team></Team>
      <Edge></Edge>
      <Clients></Clients>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
