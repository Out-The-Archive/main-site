import BuzzlightComponent from "../components/buzzlight";

export default function Buzzlight() {
    return (
        <section>
            <h3>buzzlights</h3>
            <div className="flex flex-col overflow-x-scroll">
                <div className="flex gap-28 ms-72">
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                </div>
                <div className="flex gap-28 ms-36 -mt-20">
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                </div>
                <div className="flex gap-28 -mt-20">
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                    <BuzzlightComponent videoSrc="/jollibee.mp4" />
                </div>
            </div>
        </section>
    );
}
