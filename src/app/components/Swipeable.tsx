"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

type SwipeableProps = {
    image: string;
    alt: string;
    width: number;
    height: number;
    top?: string;
    left?: string;
    zindex?: number;
};

export default function Swipeable({
    image,
    alt,
    width,
    height,
    top,
    left,
    zindex
}: SwipeableProps) {
    return (
        <motion.div
            drag
            dragElastic={1}
            dragTransition={{
                power: 0.1,
            }}
            className="inline-block absolute hover:cursor-pointer"
            style={{
                width: width,
                height: height,
                top: top ?? "",
                left: left ?? "",
                zIndex: zindex ?? 0,
            }}
        >
            <Image
                src={image}
                alt={alt}
                width={width}
                height={height}
                draggable={false}
            />
        </motion.div>
    );
}
