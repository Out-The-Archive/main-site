import Image from "next/image";

type BoardImageProps = {
    member: string;
};

export default function BoardImage({ member }: BoardImageProps) {
    return (
        <div className="relative flex items-end group overflow-hidden">
            <Image
                src={`/footer/standing/${member}.png`}
                alt={`${member} standing`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={185}
                height={600}
                className="relative object-bottom bottom-0 group-hover:opacity-0"
            />
            <Image
                src={`/footer/jumping/${member}.png`}
                alt={`${member} jumping`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={1200}
                height={600}
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
            />
        </div>
    );
}
