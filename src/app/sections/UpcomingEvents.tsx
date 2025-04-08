"use client"
import React, { useState, useEffect, useRef, useMemo, } from "react";
import EventCard from "../components/eventcard";
import events from "../../../public/upcomingEvents/events/events";

//Breakpoints
const BREAKPOINTS = {
    DESKTOP: 1024,
    LDESKTOP: 1400,
}

//SVG path properties for each breakpoint
const SVG_PATH_PROPS = {
    TABLET: {
        width: '432',
        height: '81',
        viewBox: '0 0 432 81',
        strokeWidth: '2',
        dashArray: '4 4',
        d: 'M0 1.86133C9.28227 12.3039 17.9845 23.2689 28.817 32.3379C36.3218 38.621 43.8537 44.8351 52.6551 49.2359C60.703 53.2598 70.5301 55.0731 79.3599 56.4778C88.6017 57.9481 101.858 58.2575 110.515 54.5165C119.105 50.805 124.295 44.3788 129.601 36.9019C131.356 34.429 135.178 28.0591 132.392 24.9451C130.203 22.4981 127.363 20.8158 124.283 19.8531C114.862 16.9092 104.11 27.9433 108.479 37.1659C111.988 44.574 119.339 48.0854 126.131 52.2533C138.093 59.5937 152.137 60.6358 165.886 61.4567C182.176 62.4292 198.763 61.3254 214.166 55.4971C240.371 45.5817 265.283 33.7712 293.941 33.7712C306.227 33.7712 320.326 36.5541 331.999 40.7115C337.509 42.6738 342.871 44.3372 345.917 49.7262C349.864 56.7094 354.557 62.8968 353.008 71.4144C352.075 76.5491 343.84 79.2598 339.467 79.2598C337.565 79.2598 333.224 80.0996 331.659 78.8827C329.744 77.3932 330.072 75.0734 329.434 72.9986C326.333 62.9195 335.906 55.8652 341.504 49.2359C347.632 41.9785 358.247 38.3953 366.7 34.7519C375.699 30.873 385.241 28.9209 394.649 26.303C400.22 24.7529 424.739 20.3418 430.5 19.8531',
    }, 
    DESKTOP: {
        width: '617',
        height: '127',
        viewBox: '0 0 485 127',
        strokeWidth: '3.15917',
        dashArray: '6.32 6.32',
        d: 'M-65 1.85205C-50.3379 18.3469 -36.5919 35.6671 -19.4812 49.9924C-7.62668 59.9171 4.27055 69.7328 18.1732 76.6841C30.8854 83.0402 46.4082 85.9045 60.3555 88.1234C74.9537 90.4458 95.8926 90.9344 109.568 85.0252C123.136 79.1626 131.334 69.0119 139.716 57.2015C142.488 53.2954 148.525 43.2336 144.124 38.3148C140.666 34.4496 136.181 31.7922 131.315 30.2715C116.435 25.6214 99.4505 43.0508 106.351 57.6186C111.894 69.3202 123.505 74.8668 134.234 81.4504C153.129 93.0451 175.314 94.6913 197.031 95.9879C222.763 97.5241 248.962 95.7806 273.293 86.5743C314.686 70.9121 354.036 52.2564 399.304 52.2564C418.711 52.2564 440.982 56.6522 459.42 63.2191C468.123 66.3188 476.593 68.9462 481.405 77.4586C487.639 88.4892 495.052 98.2627 492.606 111.717C491.131 119.828 478.123 124.109 471.217 124.109C468.212 124.109 461.355 125.436 458.884 123.514C455.859 121.161 456.377 117.497 455.368 114.219C450.47 98.2985 465.591 87.1556 474.434 76.6841C484.114 65.2205 500.882 59.5604 514.233 53.8055C528.448 47.6784 543.52 44.595 558.382 40.4597C567.18 38.0113 605.91 31.0434 615.011 30.2715',
    }, 
    LDESKTOP: {
        width: '756',
        height: '141',
        viewBox: '0 0 756 141',
        strokeWidth: '3.50311',
        dashArray: '7.01 7.01',
        d: 'M0 2.29785C16.2584 20.5885 31.5009 39.7944 50.4745 55.6792C63.6196 66.6844 76.812 77.5688 92.2282 85.2768C106.325 92.325 123.537 95.5011 139.003 97.9615C155.19 100.537 178.409 101.079 193.574 94.5261C208.618 88.0252 217.709 76.7694 227.003 63.6732C230.077 59.3419 236.772 48.1846 231.892 42.7303C228.057 38.4443 223.084 35.4976 217.688 33.8114C201.187 28.655 182.354 47.9819 190.006 64.1357C196.152 77.1113 209.028 83.2617 220.925 90.5621C241.877 103.419 266.477 105.245 290.559 106.682C319.091 108.386 348.143 106.452 375.123 96.2438C421.023 78.8764 464.657 58.1898 514.853 58.1898C536.373 58.1898 561.069 63.0642 581.514 70.3459C591.164 73.7831 600.557 76.6965 605.892 86.1357C612.805 98.3672 621.025 109.205 618.312 124.124C616.677 133.117 602.253 137.865 594.595 137.865C591.263 137.865 583.659 139.336 580.919 137.205C577.565 134.596 578.139 130.533 577.021 126.898C571.589 109.244 588.357 96.8884 598.162 85.2768C608.896 72.5652 627.489 66.289 642.294 59.9075C658.057 53.1134 674.77 49.6942 691.249 45.1087C701.006 42.3937 743.952 34.6673 754.043 33.8114',
    },
}

export default function UpcomingEventsSection() {

    //State for window width
    const [windowWidth, setWindowWidth] = useState(
        typeof window != 'undefined' ? window.innerWidth : 0
    )

    //Determine current breakpoint
    const currentBreakpoint = useMemo(() => {
        if (windowWidth < BREAKPOINTS.DESKTOP) {
            return 'TABLET';

        } else if (windowWidth >= BREAKPOINTS.DESKTOP && windowWidth < BREAKPOINTS.LDESKTOP){
            return 'DESKTOP';

        } else {
            return 'LDESKTOP';

        }
    }, [windowWidth])

    /*
    //Percentage values of card positions based on breakpoints
    const currentPercentages = useMemo(() => {
        if (windowWidth < BREAKPOINTS.DESKTOP) {
            return {}
        }
    })
    */

    //Get SVG props based on current breakpoint
    const svgPathProps = useMemo(() => {
        return SVG_PATH_PROPS[currentBreakpoint];
    }, [currentBreakpoint]);


    //length of SVG path
    const [pathLength, setPathLength] = useState(0);

    const pathRef = useRef<SVGPathElement | null>(null);

    const getPercentage = (id: number): number => {
        return 19 + (id - 1) * 47
    }

    // Move objects along the path based on a percentage of the line
    const moveObjects = (percentage: number): string => {
        if (pathRef.current && pathLength > 0) {
            const distance: number = (percentage * pathLength) / 100;

            const point: SVGPoint = pathRef.current.getPointAtLength(distance);

            return (`translate3d(${Math.round(point.x)}px, ${Math.round(point.y)}px, 0)`)
        }
        return '';
    };
    
    //Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, [])

    //Updates the path length
    useEffect(() => {
        if (pathRef.current) {
            const length = Math.floor(pathRef.current.getTotalLength())
            setPathLength(length);
        } 
    }, [svgPathProps]);

    const allEvents = useMemo(() => {
        return events.map((anEvent) => (
            <EventCard
                key={anEvent.id}
                coords={moveObjects(getPercentage(anEvent.id))}
                eventName={anEvent.eventName}
                date={anEvent.date}
                location={anEvent.location}
                imgSrc={anEvent.imgSrc}
            />
        ));
    }, [pathLength])

    return (
        <section className="py-12">
        <h3 className="text-2xl mb-6font-aileron text-[32px] lg:text-[36px] font-bold italic pl-[27px] mb-[12px]">upcoming events</h3>

            <div className="w-full max-w-[1400px] h-[340px]  lg:h-[500px] xl:h-[565px] mx-auto relative overflow-auto no-scrollbar">

                {/*Renders all events from the events file in public/upcomingEvents*/}
                {pathLength > 0 ? allEvents : null}

                {/* The SVG path */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgPathProps.width} height={svgPathProps.height} viewBox={svgPathProps.viewBox}
                    fill="none"
                    key={currentBreakpoint}
                >
                    <path
                        ref={pathRef}
                        id="path"
                        d={svgPathProps.d}
                        stroke="black"
                        strokeWidth={svgPathProps.strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={svgPathProps.dashArray}
                    />
                </svg>
            </div>
        </section>
    );
}
