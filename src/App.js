import React from "react";

import "./App.css";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import { ReactComponent as MTASvg } from './MTA_NYC_logo.svg';
//import { ReactComponent as MapSvg} from './New_York_Subway_Map_Alargule.svg';
import { ReactComponent as SubwaySvg } from './New_York_Subway_Map_Alargule.svg';


function App() {
  // add links to your pages for now
  return (
    <div >
      <NavBar />
      <div class= "mainContent">
      <div>   
        <MTASvg style={{ height: 100, width: 100 }}/>
      </div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
