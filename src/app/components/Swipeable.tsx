"use client";

import * as motion from "motion/react-client";

export default function Swipeable() {
    return (
        <motion.div
            drag
            style={box}
            dragElastic={1}
            dragTransition={{
                power: 0.1, // Lower power reduces the initial velocity
            }}
        />
    );
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: 10,
};
