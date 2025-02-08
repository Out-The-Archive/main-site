import Image from 'next/image';
import './hive.css';
import React from 'react';
import * as assets from '../assets/svg';
import pin from './assets/detail-pin-blue.png';
export default async function Home() {
  return (
  <>
    <div className='hive-card'>
      <div className='ellipse flex flex-col items-center padding'>
        {assets.card_hole}
        </div>
      <div className='rectangle flex flex-col items-center'>
        <div className='card-icon'>{assets.design_icon}</div>
        <p className='hive-card-text text-center'>design</p>
        <button>{assets.down_chevron}</button>
      </div>
      
    </div>
  </>
  );
}































