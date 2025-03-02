import Swipeable from "../components/Swipeable";

export default function Landing() {
    return (
        <div className="relative w-screen h-screen flex">
            {/* Left Text Section */}
            <div className="border flex flex-col items-start ml-20 justify-center h-full z-10">
                <h1 className="font-larken text-[145px] font-bold">OTA</h1>
                <h4 className="font-larken text-[32px] font-light">(out the archive).</h4>
                <a href="#" className="border-2 rounded-3xl py-1 px-6 font-larken font-light">
                    buzz with us
                </a>
            </div>

            {/* Swipeable Items Container */}
            <div className="border absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
                <Swipeable
                    image="/landing/record-player.svg"
                    alt=""
                    width={216}
                    height={174}
                    top="10.25rem"
                    left="10%"
                />
                <Swipeable
                    image="/landing/folder.svg"
                    alt=""
                    width={180}
                    height={80}
                    top="11rem"
                    left="calc(10% + 11rem)"
                />
                <Swipeable
                    image="/landing/Paper-clips.svg"
                    alt=""
                    width={250}
                    height={95}
                    top="16rem"
                    left="calc(10% + 4rem)"
                />
                <Swipeable
                    image="/landing/Envelope.svg"
                    alt=""
                    width={180}
                    height={95}
                    top="9rem"
                    left="calc(10% + 4rem)"
                />
                <Swipeable
                    image="/landing/Casset.svg"
                    alt=""
                    width={140}
                    height={55}
                    top="13rem"
                    left="10%"
                />
                <Swipeable
                    image="/landing/Postcard.svg"
                    alt=""
                    width={180}
                    height={95}
                    top="7rem"
                    left="calc(10% + 10rem)"
                />
                <Swipeable
                    image="/landing/Polaroids.svg"
                    alt=""
                    width={170}
                    height={95}
                    top="0.5rem"
                    left="calc(10% + 9rem)"
                />
                <Swipeable
                    image="/landing/sm-paintbrush.svg"
                    alt=""
                    width={216}
                    height={174}
                    top="10.25rem"
                    left="10%"
                />
                <Swipeable
                    image="/landing/bg-paintbrush.svg"
                    alt=""
                    width={216}
                    height={174}
                    top="10.25rem"
                    left="10%"
                />
            </div>
        </div>
    );
}
