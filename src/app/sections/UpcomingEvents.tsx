"use client"
import React, { useState, useEffect, useRef } from "react";
import EventCard from "../components/eventcard";
import events from "../../../public/upcomingEvents/events";

export default function UpcomingEventsSection() {

        const [isPathRendered, setIsPathRendered] = useState(false);

        const pathRef = useRef<SVGPathElement | null>(null);

        // randomize rotationfor each clip
        const clipRotationRandomizer = (): number => {
            return (Math.random() * 21) - 10;
        }
        
        // randomize rotation for each card
        const cardRotationRandomizer = (): number => {
            return (Math.random() * 13) - 5;
        }

        // Get path length once the component mounts
        const getPathLength = (): number => {
            if (pathRef.current) {
                return Math.floor(pathRef.current.getTotalLength());
            }
            return 0;
        };

        // Move objects along the path based on the id of the event
        const moveObjects = (id: number): string => {
            if (pathRef.current) {
                const pathLength: number = getPathLength();
                let distance: number = (35 * id * pathLength) / 100;
                
                if(id == 1) {
                    distance = (19 * id * pathLength) / 100;
                }
                
                const point: SVGPoint = pathRef.current.getPointAtLength(distance);
   
                return (`translate3d(${Math.round(point.x)}px, ${Math.round(point.y)}px, 0)`)
            }
            return '';
        };

        //Detects when the path is rendered
        useEffect(() => {
            if (pathRef.current) {
                setIsPathRendered(true);
            }
        }, []);

        const allEvents = events.map((anEvent) => {
            return (<EventCard
                        coords={moveObjects(anEvent.id)}
                        eventName={anEvent.eventName}
                        date={anEvent.date}
                        location={anEvent.location}
                        imgSrc={anEvent.imgSrc}
                        clipRotation={clipRotationRandomizer()}
                        cardRotation={cardRotationRandomizer()}
                    />)
        })

  return (
    <section className="py-12">
    <h3 className="text-2xl mb-6font-aileron text-[32px] lg:text-[36px] font-bold italic pl-[27px] mb-[12px]">upcoming events</h3>
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full max-w-[1400px] h-[330px]  lg:h-[485px] xl:h-[525px] mx-auto relative overflow-auto no-scrollbar">
            

            {/*Renders all events from the events file in public/upcomingEvents*/}
            {isPathRendered && allEvents}

            {/* The SVG path */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="432"
                height="81"
                viewBox="0 0 432 81"
                fill="none"
            >
                <path
                    ref={pathRef}
                    id="path"
                    d="M0 1.86133C9.28227 12.3039 17.9845 23.2689 28.817 32.3379C36.3218 38.621 43.8537 44.8351 52.6551 49.2359C60.703 53.2598 70.5301 55.0731 79.3599 56.4778C88.6017 57.9481 101.858 58.2575 110.515 54.5165C119.105 50.805 124.295 44.3788 129.601 36.9019C131.356 34.429 135.178 28.0591 132.392 24.9451C130.203 22.4981 127.363 20.8158 124.283 19.8531C114.862 16.9092 104.11 27.9433 108.479 37.1659C111.988 44.574 119.339 48.0854 126.131 52.2533C138.093 59.5937 152.137 60.6358 165.886 61.4567C182.176 62.4292 198.763 61.3254 214.166 55.4971C240.371 45.5817 265.283 33.7712 293.941 33.7712C306.227 33.7712 320.326 36.5541 331.999 40.7115C337.509 42.6738 342.871 44.3372 345.917 49.7262C349.864 56.7094 354.557 62.8968 353.008 71.4144C352.075 76.5491 343.84 79.2598 339.467 79.2598C337.565 79.2598 333.224 80.0996 331.659 78.8827C329.744 77.3932 330.072 75.0734 329.434 72.9986C326.333 62.9195 335.906 55.8652 341.504 49.2359C347.632 41.9785 358.247 38.3953 366.7 34.7519C375.699 30.873 385.241 28.9209 394.649 26.303C400.22 24.7529 424.739 20.3418 430.5 19.8531"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                />
            </svg>
        </div>
      </div>
    </section>
  );
}
