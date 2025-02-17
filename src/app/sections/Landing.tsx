import Swipeable from "../components/Swipeable";

export default function Landing() {
    return (
        <div>
            <div className="overflow-hidde relative h-[30rem]">
                <Swipeable
                    image="/record-player.png"
                    alt=""
                    width={216}
                    height={174}
                    top="4.25rem"
                    left="10%"
                />
                <Swipeable
                    image="/folder.png"
                    alt=""
                    width={180}
                    height={80}
                    top="11rem"
                    left="calc(10% + 11rem)"
                />
                <Swipeable
                    image="/Paper-clips.png"
                    alt=""
                    width={250}
                    height={95}
                    top="16rem"
                    left="calc(10% + 4rem)"
                />
                <Swipeable
                    image="/Envelope.png"
                    alt=""
                    width={180}
                    height={95}
                    top="9rem"
                    left="calc(10% + 4rem)"
                />
                <Swipeable
                    image="/Casset.png"
                    alt=""
                    width={140}
                    height={55}
                    top="13rem"
                    left="10%"
                />
                <Swipeable
                    image="/Postcard.png"
                    alt=""
                    width={180}
                    height={95}
                    top="7rem"
                    left="calc(10% + 10rem)"
                />
                <Swipeable
                    image="/Polaroids.png"
                    alt=""
                    width={170}
                    height={95}
                    top="0.5rem"
                    left="calc(10% + 9rem)"
                />
            </div>
            <div>
                <h1>OTA</h1>
                <h4>(out the archive)."</h4>
                <a href="#" className="border-2 rounded-full">
                    buzz with us
                </a>
            </div>
        </div>
    );
}
