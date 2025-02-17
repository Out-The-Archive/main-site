import BuzzlightComponent from "../components/Buzzlight";

export default function Buzzlight() {
    return (
        <section>
            <h3>buzzlights</h3>
            <div className="flex flex-col overflow-x-scroll">
                <div className="flex gap-28 ms-72">
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                </div>
                <div className="flex gap-28 ms-36 -mt-20">
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                </div>
                <div className="flex gap-28 -mt-20">
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                    <BuzzlightComponent
                        videoSrc="/jollibee.mp4"
                        alt="Hexagon Image 1"
                    />
                </div>
            </div>
        </section>
    );
}
