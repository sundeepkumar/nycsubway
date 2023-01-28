import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { ReactComponent as SubwaySvg } from './New_York_Subway_Map_Alargule.svg';



const MapView = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div> 
     <div>
    <SubwaySvg style={{ height: 800, width: 800 }}/>
    </div>
     </div>
  );
};

export default MapView;
