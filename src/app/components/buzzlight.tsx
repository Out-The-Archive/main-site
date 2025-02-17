"use client";

type BuzzlightProps = {
    videoSrc: string;
    alt: string;
};

export default function BuzzlightComponent({ videoSrc, alt }: BuzzlightProps) {
    return (
        <div
            className="flex-none group h-40 w-44 relative overflow-hidden bg-red-600"
            style={{
                WebkitMaskImage: 'url("/hexagon.svg")',
                maskImage: 'url("/hexagon.svg")',
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
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
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute grid place-items-center inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <p className="text-white">JOLLIBEE</p>
            </div>
        </div>
    );
}
