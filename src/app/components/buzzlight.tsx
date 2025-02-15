import Image from 'next/image';

type BuzzlightProps = {
    imageSrc: string;
    hoverSrc: string;
    alt: string;
  };

  const Buzzlight: React.FC<BuzzlightProps> = ({ imageSrc, hoverSrc, alt }) => {
  return (
    <div className="group relative w-40 h-40 overflow-hidden">
      {/* Base Image */}
      <Image 
        src={imageSrc} 
        alt={alt} 
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        style={{ clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)" }}
      />

      {/* Hover Layer */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" style={{ clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)" }}>
        <Image 
          src={hoverSrc} 
          alt={alt} 
          fill
          className="object-cover"
          style={{ clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)" }}
        />
      </div>
    </div>
  );
}

export default Buzzlight;
