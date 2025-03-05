import Swipeable from "../components/Swipeable";

export default function Landing() {
    return (
        <div className="relative w-screen h-screen overflow-hiden flex flex-col items-center sm:justify-center sm:flex-row-reverse">
            {/* 
                Breakpoint Scalings for Images
                mobile - tablet = ~1.44
                tablet - small desktop = ~1.70
                small desktop - large desktop = ~1.12
            */}
            {/*Graphics Container*/}
            <div className="border flex justify-center w-fit h-fit ">

                {/* Swipeable Items Container*/}
                <div className="border top-0 left-0 flex items-center justify-center
                                relative w-[261px] h-[265px]
                                sm:w-[375.84px] sm:h-[368.32px]
                                lg:w-[638.928px] lg:h-[626.149px] 
                                xl:w-[715.6px] xl:h-[701.288px]">
                    <Swipeable
                        image="/landing/record-player.svg"
                        alt="Record Player"
                        className="w-[132.56px] aspect-[1.241] sm:w-[190.89px] lg:w-[324.51px] xl:w-[363.45px]"
                        //width={132.56}
                        //height={106.78}
                        top="14.345%"
                        left="2.019%"
                    />
                    <Swipeable
                        image="/landing/folder.svg"
                        alt="Archive Folder"
                        className="w-[123.62px] aspect-[1.33] sm:w-[178.01px] lg:w-[302.62px] xl:w-[338.94px]"
                        //width={123.62}
                        //height={340.15}
                        top="44.674%"
                        left="49.955%"
                        />
                    <Swipeable
                        image="/landing/Paper-clips.svg"
                        alt=""
                        className="w-[168.15px] aspect-[2.23] sm:w-[242.14px] lg:w-[411.63px] xl:w-[461.03px]"
                        //width={250}
                        //height={95}
                        top="72.421%"
                        left="18.294%"
                        />
                    <Swipeable
                        image="/landing/Envelope.svg"
                        alt="Envelope"
                        className="w-[152.1px] aspect-[1.37] sm:w-[219.03px] lg:w-[372.34px] xl:w-[417.03px]"
                        //width={180}
                        //height={95}
                        top="34.563%"
                        left="14.294%"
                        />
                    <Swipeable
                        image="/landing/Casset.svg"
                        alt="Cassette Tape"
                        className="w-[92.36px] aspect-[1.37] sm:w-[133px] lg:w-[226.1px] xl:w-[253.23px]"
                        //width={140}
                        //height={55}
                        top="48.437%"
                        left="0"
                        />
                    <Swipeable
                        image="/landing/Postcard.svg"
                        alt="Postcard"
                        className="w-[145.91px] aspect-[1.48] sm:w-[210.11px] lg:w-[357.19px] xl:w-[400.05px]"
                        //width={180}
                        //height={95}
                        top="23.042%"
                        left="43.242%"
                        />
                    <Swipeable
                        image="/landing/Polaroids.svg"
                        alt="Two Instant Photos"
                        className="w-[111.078px] aspect-[1.01] sm:w-[160px] lg:w-[271.92px] xl:w-[304.55px]"
                        //width={170}
                        //height={95}
                        top="0"
                        left="36.525%"
                        />
                    <Swipeable
                        image="/landing/bg-paintbrush.svg"
                        alt="Thick Paintbrush"
                        className="w-[96.963px] aspect-[5.64] sm:w-[139.63px] lg:w-[237.37px] xl:w-[265.85px]"
                        //width={216}
                        //height={174}
                        top="73.598%"
                        left="19.751%"
                        />
                    <Swipeable 
                        image="/landing/sm-paintbrush.svg"
                        alt="Thin Paintbrush"
                        className="w-[91.2px] aspect-[2.38] sm:w-[131.328px] lg:w-[223.26px] xl:w-[250.05px]"
                        //width={216}
                        //height={174}
                        top="68.547%"
                        left="13.571%"
                        />
                    <div className="size-[100px] border"><h1>PLACEHOLDER</h1></div>
                </div>
            </div>
            {/* Left Text Section*/}
            <div className="border flex flex-col items-start sm:ml-20 justify-center h-[350px] z-10">
                <h1 className="font-larken text-[145px] font-bold">OTA</h1>
                <h4 className="font-larken text-[32px] font-light">(out the archive).</h4>
                <a href="#" className="border-2 rounded-3xl py-1 px-6 font-larken font-light">
                    buzz with us
                </a>
            </div>
        </div>
    );
}
