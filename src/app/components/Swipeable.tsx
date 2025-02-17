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
};

export default function Swipeable({
    image,
    alt,
    width,
    height,
    top,
    left,
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
