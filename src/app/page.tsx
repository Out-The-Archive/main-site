import Buzzlight from "./components/buzzlight";

export default function Home() {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-10">
            <Buzzlight
                imageSrc="/bee.png"
                hoverSrc="/blackbox.jpg"
                alt="Hexagon Image 1"
            />
            <Buzzlight
                imageSrc="/bee.png"
                hoverSrc="/blackbox.jpg"
                alt="Hexagon Image 2"
            />
            <Buzzlight
                imageSrc="/bee.png"
                hoverSrc="/blackbox.jpg"
                alt="Hexagon Image 3"
            />
        </div>
    );
}
