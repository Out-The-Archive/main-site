import Swipeable from "../components/Swipeable";

export default function Landing() {
    return (
        <div className="relative w-screen h-screen flex">
            <h4 className="absolute font-larken text-2xl" style={{ top: '10%', left: '47.5%', transform: 'translateX(-50%)' }}>"we bring our ideas...</h4>
            <img src={"/landing/bl-paint.svg"} alt="blue paint" className="fixed"  style={{ top: '58%', left: '63%', zIndex: 20}}/>
            <img src={"/landing/gr-paint.svg"} alt="green paint" className="fixed" style={{ top: '15%', left: '55.5%', zIndex: 0}}/>
            <img src={"/landing/og-paint.svg"} alt="orange paint" className="fixed" style={{ top: '61%', left: '49%', zIndex: 6}}/>
            <img src={"/landing/pk-paint.svg"} alt="pink paint" className="fixed" style={{ top: '27.5%', left: '74%', zIndex: 20}}/>
            <div className="flex flex-col items-start ml-56 justify-center h-screen">
                <h1 className="font-larken text-[145px] font-bold">OTA</h1>
                <h4 className="font-larken text-[32px] font-light">(out the archive)."</h4>
                <a href="#" className="border-2 rounded-3xl py-1 px-6 font-larken font-light">
                    buzz with us
                </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
                <Swipeable
                    image="/landing/record-player.svg"
                    alt=""
                    width={324}
                    height={257}
                    top="10.5rem"
                    left="45%"
                    zindex={1}
                />
                <Swipeable
                    image="/landing/folder.svg"
                    alt=""
                    width={257}
                    height={191}
                    top="23rem"
                    left="calc(52% + 11rem)"
                    zindex={2}
                />
                <Swipeable
                    image="/landing/Paper-clips.svg"
                    alt=""
                    width={411}
                    height={182}
                    top="31rem"
                    left="calc(47% + 4rem)"
                    zindex={3}
                />
                <Swipeable
                    image="/landing/Envelope.svg"
                    alt=""
                    width={307}
                    height={221}
                    top="18.5rem"
                    left="calc(46% + 4rem)"
                    zindex={4}
                />
                <Swipeable
                    image="/landing/Casset.svg"
                    alt=""
                    width={202}
                    height={129}
                    top="24rem"
                    left="45%"
                    zindex={5}
                />
                <Swipeable
                    image="/landing/Postcard.svg"
                    alt=""
                    width={333}
                    height={222}
                    top="15rem"
                    left="calc(52% + 10rem)"
                    zindex={6}
                />
                <Swipeable
                    image="/landing/Polaroids.svg"
                    alt=""
                    width={271}
                    height={266}
                    top="5rem"
                    left="calc(50% + 9rem)"
                    zindex={7}
                />
                <Swipeable
                    image="/landing/bg-paintbrush.svg"
                    alt=""
                    width={237}
                    height={41}
                    top="31.5rem"
                    left="52.5%"
                    zindex={8}
                />
                <Swipeable
                    image="/landing/sm-paintbrush.svg"
                    alt=""
                    width={220}
                    height={38}
                    top="30.25rem"
                    left="50%"
                    zindex={9}
                />
            </div>
        </div>
    );
}
