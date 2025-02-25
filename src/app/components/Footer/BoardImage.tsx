import Image from "next/image";

export type BoardImageProps = {
    name: string;
    jumpingScale: number;
    jumpHeight?: number;
};

export default function BoardImage({
    name,
    jumpingScale,
    jumpHeight,
}: BoardImageProps) {
    return (
        <div className="relative group">
            <img
                src={`/footer/standing/${name}.png`}
                alt={`${name} standing`}
                className="relative object-bottom bottom-0 group-hover:opacity-0 md:max-h-64 lg:max-h-96 "
            />
            <img
                src={`/footer/jumping/${name}.png`}
                alt={`${name} jumping`}
                className="absolute z-10 inset-0 w-full h-full object-contain object-top opacity-0 group-hover:opacity-100"
                style={{
                    transform: `scale(${jumpingScale}) translateY(${
                        jumpHeight ?? 0
                    }%)`,
                }}
            />
        </div>
    );
}
