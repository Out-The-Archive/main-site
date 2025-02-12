import Image from 'next/image';
import '../hive.css';
import React from 'react';
import * as assets from '../assets/svg';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
export function Hivecard_Desktop ({ hive, desc }: HiveCardProps) {
const iconKey = `${hive}_icon` as keyof typeof assets;
  return (
  <>
  <AccordionItem 
  header={
    <div className='d-hive-card'>
          <div className={`${hive} d-rectangle flex`}>
            <div className='flex'>
              <div className='d-card-icon'>{assets[iconKey]}</div>
              <div className='d-hive-card-text justify-left'>{hive}</div>
            </div>
            <div className='flex flex-row ml-auto space-x-2'>
              <div>{assets.down_chevron}</div>
              <div className=''>
                {assets.card_hole}
              </div>
              <div>
                <Image className="d-pin" src={JSON.parse(JSON.stringify(require('../assets/detail-pin-'+hive+'.png')))} alt="pin"/>
              </div>
            </div>
          </div>
    </div>
    }>
      <div className={`${hive} accordion-inner`}>
        <div className='accordion-text-box'>{desc}</div>
      </div>
    </AccordionItem>
  </>
  );
}


interface HiveCardProps {
  hive: string;
  desc: string;
}


























