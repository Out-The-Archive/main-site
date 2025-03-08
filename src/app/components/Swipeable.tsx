"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

type SwipeableProps = {
    image: string;
    alt: string;
    top?: string;
    left?: string;
    className: string;
};

export default function Swipeable({
    image,
    alt,
    top,
    left,
    className,
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
                left: left ?? ""
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
