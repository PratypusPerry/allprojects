import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalculateIcon from '@mui/icons-material/Calculate';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, Link } from "react-router-dom";
import './Default.css'

export default function Default() {
  return (
    <>
      <nav>
        <h1>Pratypus Perry Projects</h1>
        <ul>
          <li><Link to="/Todo"><ListAltIcon className='navigators'/></Link></li>
          <li><Link to="/"><CalculateIcon className='navigators'/></Link></li>
          <li><Link to="/Intopo"><DeviceHubIcon className='navigators'/></Link></li>
        </ul>
        <div className='searchSec'>
        <input type='text' placeholder='Search my projects'></input>
        <SearchIcon className='searchBtn'/>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
