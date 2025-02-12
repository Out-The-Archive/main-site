import Image from 'next/image';
import '../hive.css';
import React from 'react';
import * as assets from '../assets/svg';
export function Hivecard_Mobile ({hive} : {hive:string}) {
const iconKey = `${hive}_icon` as keyof typeof assets;
  return (
  <>
    <div className='m-hive-card'>
      <div className={`${hive} m-ellipse flex flex-col items-center padding`}>
        {assets.card_hole}
        <Image className="m-pin" src={JSON.parse(JSON.stringify(require('../assets/detail-pin-'+hive+'.png')))} alt="pin"/>
        </div>
      <div className={`${hive} m-rectangle flex flex-col items-center`}>
        <div className='m-card-icon'>{assets[iconKey]}</div>
        <p className='m-hive-card-text text-center'>{hive}</p>
        <button className='chevron'>{assets.down_chevron}</button>
      </div>
      
    </div>
  </>
  );
}





























