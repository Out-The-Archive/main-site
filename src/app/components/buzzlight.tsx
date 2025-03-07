"use client";
//import { useEffect, useRef } from "react";

type BuzzlightProps = {
    videoSrc: string;
};

export default function BuzzlightComponent({ videoSrc }: BuzzlightProps) {

    /*const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [videoSrc]);*/

    return (
        <div
            className="flex-none group relative overflow-hidden
                w-44 h-40 lg:w-64 lg:h-60"
            style={{
                WebkitMaskImage: 'url("/hexagon.svg")',
                maskImage: 'url("/hexagon.svg")',
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "95%",
                maskSize: "95%",
                WebkitMaskPosition: "center",
                maskPosition: "center",
            }}
            onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.play();
            }}
            onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.pause();
            }}
        >
            <video
                src={videoSrc}
                muted
                loop
                playsInline
                //autoPlay
                poster="/jollibee_poster.png"
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 animate-fadeIn"
            />
            {/* Hover Overlay */}
            <div className="absolute grid place-items-center inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="relative flex flex-col items-center text-center text-white">
                    <p className="text-[24px] lg:text-[30px] font-larken opacity-100">Jollibee</p>
                    <div className="w-24 h-[2px] bg-white my-1"></div>
                    <p className="text-[13px] lg:text-[20px] font-larken">Mixed Media</p>
                </div>
            </div>
        </div>
    );
}
