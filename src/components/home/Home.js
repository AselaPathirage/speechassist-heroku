import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

import Sideone from './Sideone/Sideone.js';
import Sidetwo from './Sidetwo/Sidetwo';

const Home = (props) => {

  useEffect(() => {
    props.itemSelected('Dashboard');
  })



  return (
    <div className="App">
        <div className="AppGlass">
          <Sideone /><br/><br/>
          <Sidetwo />
        </div>
        
      </div>

  )
}

export default Home