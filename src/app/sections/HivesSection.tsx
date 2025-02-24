import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import hiveContent from "./hiveContent";

export default function HivesSection() {
    return (
        <section>
            <h3 className={`ml-6 font-aileron italic text-[36px]`}>hives</h3>
            <Accordion type="single" collapsible className={`ml-6`}>
                {hiveContent.map((hive, _index) => (
                    <AccordionItem
                        value={`item-${_index}`}
                        key={`item-${_index}`}
                        className="m-1 rounded-[17px] mx-4 "
                    >
                        <AccordionTrigger
                            className={`relative rounded-[17px]`}
                            style={{
                                background: `linear-gradient(90deg, ${hive.gradientStart} 0%, ${hive.gradientEnd} 100%)`,
                            }}
                        >
                            <span className="flex items-center">
                                <Image
                                    src={hive.icon}
                                    alt=""
                                    height={40}
                                    width={50}
                                />
                                {hive.hive}
                            </span>
                            <Image //hole punch
                                className={`absolute top-3 right-3`}
                                src="/hives/detail-holepunch.png"
                                alt=""
                                height={14}
                                width={14}
                            />
                            <Image //PIN
                                className={`-scale-x-90 absolute -top-6 -right-3`}
                                src={hive.pin}
                                alt=""
                                height={50}
                                width={50}
                            />
                        </AccordionTrigger>
                        <AccordionContent className={`pb-0`}>
                            <div
                                className={`pb-0 rounded-b-[17px] text-[14px]`}
                                style={{
                                    background: `linear-gradient(90deg, ${hive.gradientStart} 0%, ${hive.gradientEnd} 100%)`,
                                }}
                            >
                                <div
                                    className={`pt-[14px] pb-[14px] pl-[29px] pr-[29px] h-full w-full rounded-b-[17px] bg-[#f3eee6] bg-opacity-55 text-black`}
                                >
                                    {hive.content}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="flex mt-[30px] ml-6 font-larken font-light italic text-[18.5px]">
                <p>
                    a new creative home <br /> for your buzzing passions.
                </p>
                <a
                    href=""
                    className="flex px-[17px] rounded-[27px] bg-[#EEBCBEAB] px-4 font-larken italic font-light text-[18.5px] items-center justify-between flex-grow-0"
                >
                    join us
                </a>
            </div>
        </section>
    );
}
