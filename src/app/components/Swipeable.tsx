"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

type SwipeableProps = {
    image: string;
    alt: string;
    top?: string;
    left?: string;
    zindex?: number;
};

export default function Swipeable({
    image,
    alt,
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
            className={`${className} inline-block absolute hover:cursor-pointer`}
            style={{
                top: top ?? "",
                left: left ?? "",
                zIndex: zindex ?? 0,
            }}
        >
            <Image
                src={image}
                alt={alt}
                fill
                draggable={false}
            />
        </motion.div>
    );
}
