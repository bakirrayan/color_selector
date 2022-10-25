import React, { useState } from 'react'
import './styles/App.css'
import Slider from '@mui/material/Slider';


function App() {
  const [valueR, setValueR] = React.useState(0);
  const [valueG, setValueG] = React.useState(0);
  const [valueB, setValueB] = React.useState(0);

  const handleChangeR = (event, newValueR) => {
    setValueR(newValueR);
  };
  const handleChangeG = (event, newValueG) => {
    setValueG(newValueG);
  };
  const handleChangeB = (event, newValueB) => {
    setValueB(newValueB);
  };

  return (
    <div className="container">
      <div className='color_box' style={{ minHeight: "300px", minWidth: "300px", backgroundColor: `rgb(${valueR}, ${valueG}, ${valueB})` }} />
      <div className='slider_bar'>
        <p>Red</p>
        <Slider sx={{ color: "red"}} aria-label="Red" value={valueR} onChange={handleChangeR} valueLabelDisplay="auto" min={0} max={255}/>
        <p>Green</p>
        <Slider sx={{ color: "green"}} aria-label="Green" value={valueG} onChange={handleChangeG} valueLabelDisplay="auto" min={0} max={255}/>
        <p>Blue</p>
        <Slider sx={{ color: "blue"}}aria-label="Blue" value={valueB} onChange={handleChangeB} valueLabelDisplay="auto" min={0} max={255}/>
      </div>
      <div className='color-code'>
        <p>RGB ({valueR}, {valueG}, {valueB})</p>
      </div>
    </div>
  )
}

export default App
