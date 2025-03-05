import Swipeable from "../components/Swipeable";

export default function Landing() {
    return (
        <div className="relative w-screen h-screen flex">
            {/* Left Text Section*/}
            <div className="border flex flex-col items-start ml-20 justify-center h-full z-10">
                <h1 className="font-larken text-[145px] font-bold">OTA</h1>
                <h4 className="font-larken text-[32px] font-light">(out the archive).</h4>
                <a href="#" className="border-2 rounded-3xl py-1 px-6 font-larken font-light">
                    buzz with us
                </a>
            </div>
            
            {/* 
                Breakpoint Scalings for Images
                mobile - tablet = ~1.44
                tablet - small desktop = ~1.70
                small desktop - large desktop = ~1.12
            */}

            {/* Swipeable Items Container flex items-center justify-center*/}
            <div className="border absolute top-0 left-0 w-full h-full overflow-hidden">
                <Swipeable
                    image="/landing/record-player.svg"
                    alt="Record Player"
                    className="w-[132.56px] aspect-[1.241] sm:w-[190.89px] lg:w-[324.51px] xl:w-[363.45px]"
                    //width={132.56}
                    //height={106.78}
                    top="26.679%"
                    left="9.107%"
                />
                <Swipeable
                    image="/landing/folder.svg"
                    alt="Archive Folder"
                    className="w-[123.62px] aspect-[1.33] sm:w-[178.01px] lg:w-[302.62px] xl:w-[338.94px]"
                    //width={123.62}
                    //height={340.15}
                    top="11rem"
                    left="calc(10% + 11rem)"
                    />
                <Swipeable
                    image="/landing/Paper-clips.svg"
                    alt=""
                    className="w-[168.15px] aspect-[2.23] sm:w-[242.14px] lg:w-[411.63px] xl:w-[461.03px]"
                    //width={250}
                    //height={95}
                    top="16rem"
                    left="calc(10% + 4rem)"
                    />
                <Swipeable
                    image="/landing/Envelope.svg"
                    alt="Envelope"
                    className="w-[152.1px] aspect-[1.37] sm:w-[219.03px] lg:w-[372.34px] xl:w-[417.03px]"
                    //width={180}
                    //height={95}
                    top="9rem"
                    left="calc(10% + 4rem)"
                    />
                <Swipeable
                    image="/landing/Casset.svg"
                    alt="Cassette Tape"
                    className="w-[92.36px] aspect-[1.37] sm:w-[133px] lg:w-[226.1px] xl:w-[253.23px]"
                    //width={140}
                    //height={55}
                    top="calc(0.458% + 5.325rem)"
                    left="0.458%"
                    />
                <Swipeable
                    image="/landing/Postcard.svg"
                    alt="Postcard"
                    className="w-[145.91px] aspect-[1.48] sm:w-[210.11px] lg:w-[357.19px] xl:w-[400.05px]"
                    //width={180}
                    //height={95}
                    top="7rem"
                    left="calc(10% + 10rem)"
                    />
                <Swipeable
                    image="/landing/Polaroids.svg"
                    alt="Two Instant Photos"
                    className="w-[111.078px] aspect-[1.01] sm:w-[160px] lg:w-[271.92px] xl:w-[304.55px]"
                    //width={170}
                    //height={95}
                    top="0.5rem"
                    left="calc(10% + 9rem)"
                    />
                <Swipeable
                    image="/landing/bg-paintbrush.svg"
                    alt="Thick Paintbrush"
                    className="w-[96.963px] aspect-[5.64] sm:w-[139.63px] lg:w-[237.37px] xl:w-[265.85px]"
                    //width={216}
                    //height={174}
                    top="10.25rem"
                    left="10%"
                    />
                <Swipeable 
                    image="/landing/sm-paintbrush.svg"
                    alt="Thin Paintbrush"
                    className="w-[91.2px] aspect-[2.38] sm:w-[131.328px] lg:w-[223.26px] xl:w-[250.05px]"
                    //width={216}
                    //height={174}
                    top="10.25rem"
                    left="10%"
                    />
            </div>
        </div>
    );
}
