"use client";

import { forwardRef } from "react";

type EventCardProps = {
    coords: string;
    eventName: string;
    date: string;
    location: string;
    imgSrc: string;
    clipRotation: number;
    cardRotation: number;
};

const EventCard = forwardRef<HTMLDivElement, EventCardProps>(
    ({ coords, eventName, date, location, imgSrc, clipRotation, cardRotation }, ref) => {

        return (
            <div
                ref={ref}
                className= "size-5 absolute flex justify-center overflow-visible"
                style={{top: "-10px", left: "-10px", transform: coords}}
            >   
                <div
                    className="bg-cover size-[65px] lg:size-[102.673px] xl:w-[113.851px] 
                               absolute overflow-visible z-20"
                    style={{top: '-10px', backgroundImage: 'url(/upcomingEvents/clothespin.svg)', transform: `rotate(${clipRotation}deg)`}}
                />
                <div 
                    className="w-[177px] aspect-[0.86] lg:w-[280px] xl:w-[310px]
                                top-[35px] lg:top-[55px]
                                py-3 px-4 shadow-lg rounded-xl flex flex-col 
                                border border-[#A49E9B] absolute z-10 bg-white"
                    style={{transform: `rotate(${cardRotation}deg)`}}
                >
                    <img
                        src={imgSrc}
                        className="w-11/12 h-auto rounded-lg mb-2 self-center z-0"
                    />
                    <div className="font-aileron">
                        <p className="italic font-bold text-[13px] lg:text-[19px] xl:text-[30px]">{eventName}</p>
                        <p className="font-light text-[12px] lg:text-[18px] xl:text-[21px]">{date}</p>
                        <p className="font-light text-[12px] lg:text-[18px] xl:text-[px]">{location}</p>
                    </div>
                </div>
                
            </div>
        
        );
    }
);

export default EventCard;