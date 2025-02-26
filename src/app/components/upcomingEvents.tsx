import React, { useState, useEffect, useRef } from "react";

export default function upcomingEvents() {
    const [sliderValue, setSliderValue] = useState<number>(0);

    const pathRef = useRef<SVGPathElement | null>(null);
    const objRef1 = useRef<HTMLDivElement | null>(null);
    const objRef2 = useRef<HTMLDivElement | null>(null);
    const objRef3 = useRef<HTMLDivElement | null>(null);

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
        <div className="w-full max-w-lg mx-auto relative">
            <div
                ref={objRef1}
                className="bg-blue-500 w-5 h-5 rounded-full absolute"
                style={{ top: "-10px", left: "-10px" }}
            >
                <div className="-translate-x-1/2 w-44 h-56 py-2 px-4 shadow-lg rounded-xl flex flex-col border border-[#A49E9B]">
                    <img
                        src="/events/event.png"
                        className="w-full h-auto rounded-lg mb-2 self-center"
                    ></img>
                    <div className="font-aileron">
                        <p className="italic font-bold text-sm">
                            Market the Event
                        </p>
                        <p className="font-light text-[12px]">2/28</p>
                        <p className="font-light text-[12px]">Che Cafe</p>
                    </div>
                </div>
            </div>
            <div
                ref={objRef2}
                className="bg-red-500 w-5 h-5 rounded-full absolute"
                style={{ top: "-10px", left: "-10px" }}
            >
                <div className="-translate-x-1/2 w-44 h-56 py-2 px-4 shadow-lg rounded-xl flex flex-col border border-[#A49E9B]">
                    <img
                        src="/events/event.png"
                        className="w-full h-auto rounded-lg mb-2 self-center"
                    ></img>
                    <div className="font-aileron">
                        <p className="italic font-bold text-sm">ARC Day</p>
                        <p className="font-light text-[12px]">12/12</p>
                        <p className="font-light text-[12px]">Stageroom</p>
                    </div>
                </div>
            </div>
            <div
                ref={objRef3}
                className="bg-green-500 w-5 h-5 rounded-full absolute"
                style={{ top: "-10px", left: "-10px" }}
            >
                <div className="-translate-x-1/2 w-44 h-56 py-2 px-4 shadow-lg rounded-xl flex flex-col border border-[#A49E9B]">
                    <img
                        src="/events/event.png"
                        className="w-full h-auto rounded-lg mb-2 self-center"
                    ></img>
                    <div className="font-aileron">
                        <p className="italic font-bold text-sm">GBM #1</p>
                        <p className="font-light text-[12px]">2/17</p>
                        <p className="font-light text-[12px]">DIB 208</p>
                    </div>
                </div>
            </div>

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
    );
}
