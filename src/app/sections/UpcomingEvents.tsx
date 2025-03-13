"use client"
import React, { useState, useEffect, useRef } from "react";
import EventCard from "../components/eventcard";


export default function UpcomingEventsSection() {
        const [sliderValue, setSliderValue] = useState<number>(0);
    
        const pathRef = useRef<SVGPathElement | null>(null);
        const objRef1 = useRef<HTMLDivElement | null>(null);
        const objRef2 = useRef<HTMLDivElement | null>(null);
        const objRef3 = useRef<HTMLDivElement | null>(null);
    
        //randomize rotation for each card
        const clipRotationRandomizer = (): number => {
            return (Math.random() * 21) - 10;
        }
    
        const cardRotationRandomizer = (): number => {
            return (Math.random() * 14) - 5;
        }
    
    
        // Get path length once the component mounts
        const getPathLength = (): number => {
            if (pathRef.current) {
                return Math.floor(pathRef.current.getTotalLength());
            }
            return 0;
        };
    
        // Move objects along the path based on percentage
        const moveObjects = (percent: number): void => {
            if (pathRef.current) {
                const pathLength: number = getPathLength();
                const distance: number = (percent * pathLength) / 100;
                const point: SVGPoint = pathRef.current.getPointAtLength(distance);
    
                // Move the marker dot
                if (objRef1.current) {
                    objRef1.current.style.transform = `translate3d(${Math.round(
                        point.x
                    )}px, ${Math.round(point.y)}px, 0)`;
                }
            }
        };
    
        // Handle slider change
        const handleSliderChange = (
            e: React.ChangeEvent<HTMLInputElement>
        ): void => {
            const value: number = parseInt(e.target.value, 10);
            setSliderValue(value);
            moveObjects(value);
        };
    
        useEffect(() => {
            if (pathRef.current) {
                const pathLength: number = getPathLength();
                const point1: SVGPoint = pathRef.current.getPointAtLength(
                    (16 * pathLength) / 100
                );
                const point2: SVGPoint = pathRef.current.getPointAtLength(
                    (64 * pathLength) / 100
                );
                const point3: SVGPoint = pathRef.current.getPointAtLength(
                    (100 * pathLength) / 100
                );
    
                // Move the marker dot
                if (objRef1.current) {
                    objRef1.current.style.transform = `translate3d(${Math.round(
                        point1.x
                    )}px, ${Math.round(point1.y)}px, 0)`;
                }
                if (objRef2.current) {
                    objRef2.current.style.transform = `translate3d(${Math.round(
                        point3.x
                    )}px, ${Math.round(point3.y)}px, 0)`;
                }
                if (objRef3.current) {
                    objRef3.current.style.transform = `translate3d(${Math.round(
                        point2.x
                    )}px, ${Math.round(point2.y)}px, 0)`;
                }
            }
        }, []);
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold italic mb-6">Upcoming Events</h3>
        <div className="w-full max-w-[1400px] mx-auto relative overflow-auto">
            <EventCard
                ref={objRef1}
                eventName="Market the Event"
                date="2/28"
                location="Che Cafe"
                imgSrc="/upcomingEvents/events/event.png"
                clipRotation={clipRotationRandomizer()}
                cardRotation={cardRotationRandomizer()}
            />

            <EventCard
                ref={objRef2}
                eventName="A"
                date="2/28"
                location="Che Cafe"
                imgSrc="/upcomingEvents/events/event.png"
                clipRotation={clipRotationRandomizer()}
                cardRotation={cardRotationRandomizer()}
            />

            {/* The SVG path */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="932"
                height="105"
                viewBox="0 0 932 105"
                fill="none"
            >
                <path
                    ref={pathRef}
                    id="path"
                    d="M0 24.8614C9.28227 35.304 17.9845 46.269 28.817 55.3381C36.3218 61.6212 43.8537 67.8353 52.6551 72.236C60.703 76.2599 70.5301 78.0732 79.3599 79.4779C88.6017 80.9482 101.858 81.2576 110.515 77.5166C114.149 75.9467 117.173 73.8912 119.856 71.4759M119.856 71.4759C123.516 68.1809 126.539 64.2164 129.601 59.902C131.356 57.4291 135.178 51.0592 132.392 47.9452C130.203 45.4982 127.363 43.8159 124.283 42.8532C114.862 39.9093 104.11 50.9435 108.479 60.166C110.912 65.3041 115.194 68.5676 119.856 71.4759ZM119.856 71.4759C121.916 72.7608 124.05 73.9763 126.131 75.2535C138.093 82.5938 152.137 83.636 165.886 84.4568C182.176 85.4293 198.763 84.3256 214.166 78.4973C240.371 68.5818 265.283 56.7714 293.941 56.7714C306.227 56.7714 320.326 59.5543 331.999 63.7116C336.389 65.2751 340.685 66.6487 343.791 69.8681M343.791 69.8681C344.583 70.6895 345.298 71.6309 345.917 72.7263C349.864 79.7096 354.557 85.8969 353.008 94.4145C352.075 99.5492 343.84 102.26 339.467 102.26C337.565 102.26 333.224 103.1 331.659 101.883C329.744 100.393 330.072 98.0735 329.434 95.9987C326.333 85.9196 335.906 78.8653 341.504 72.236C342.21 71.3998 342.976 70.6124 343.791 69.8681ZM343.791 69.8681C350.05 64.1521 359.221 60.9756 366.7 57.752C375.699 53.8731 385.241 51.9211 394.649 49.3031C400.22 47.7531 424.739 43.3419 430.5 42.8532C436 42 465.247 42.5998 471.015 42.1954C480.757 41.5123 490.497 41.5084 500.09 39.508C508.062 37.8455 517.684 36.5678 524.96 32.2193M932 30.3568C924.92 24.8043 808.5 51.3609 795 58.8609C784 63.8609 764.281 69.4542 755.05 71.3878C751.177 72.1992 747.802 73.6081 744.69 75.4379M744.69 75.4379C740.445 77.9342 736.69 81.2139 732.827 84.8286C730.613 86.9005 725.593 92.3771 727.7 95.9855C729.356 98.8209 731.802 101.037 734.628 102.597C743.269 107.365 756.011 98.7051 753.575 88.7951C752.218 83.2741 748.676 79.2199 744.69 75.4379ZM744.69 75.4379C742.929 73.767 741.081 72.1493 739.298 70.4816C729.046 60.8968 715.494 57.0664 702.187 53.5119C686.421 49.3006 669.948 47.0642 653.691 49.6936C626.032 54.1668 599.261 60.7554 571.182 55.0229C559.144 52.5653 545.887 47.0183 535.282 40.6102C531.293 38.2002 527.359 35.9949 524.96 32.2193M524.96 32.2193C524.348 31.2561 523.835 30.1907 523.448 28.9936C520.978 21.3619 517.617 14.3609 520.838 6.32528C522.78 1.4811 531.391 0.472382 535.675 1.347C537.539 1.72745 541.96 1.77305 543.25 3.27835C544.828 5.12075 544.043 7.32804 544.253 9.48868C545.276 19.9844 534.485 24.9812 527.674 30.3568C526.815 31.0348 525.907 31.6531 524.96 32.2193Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                />
            </svg>

            {/* Controls */}
            <div className="mt-96 pt-6">
                <div className="mb-6">
                    <input
                        type="range"
                        className="w-full"
                        min="0"
                        max="100"
                        value={sliderValue}
                        onChange={handleSliderChange}
                    />
                    <input
                        type="text"
                        className="w-12 ml-2 px-2 border border-gray-300 rounded"
                        value={sliderValue}
                        readOnly
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
