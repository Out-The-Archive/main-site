"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import hiveContent from "./hiveContent";
import { useState } from "react";

export default function HivesSection() {
    const [openItem, setOpenItem] = useState<string | null>(null);
    return (
        
        <section>
            
            <h3
            className={`flex ml-[2%] font-aileron italic text-[36px]`}
            >
                hives
            </h3>
            <div className={`place-self-center max-w-fit flex flex-col justify-center px-4 `}>
            <Accordion type="single" collapsible onValueChange={(value) => setOpenItem(value)}
            className={`w-full flex justify-center px-4 `}>
                <div className={` flex flex-col items-center`}>
                {hiveContent.map((hive, _index) => (
                    <AccordionItem
                        value={`item-${_index}`}
                        className="place-self-center w-[350px] md:w-[426px] lg:w-[632px] m-1 mx-4 rounded-[17px] shadow-[4px 0px 4.623px 0px rgba(0, 0, 0, 0.25)]"
                    >
                        <AccordionTrigger
                            className={`relative rounded-t-[17px] 
                                ${openItem === `item-${_index}` ? "rounded-b-0" : "rounded-b-[17px]"}
                              `}
                            style={{
                              background: `linear-gradient(90deg, ${hive.gradientStart} 0%, ${hive.gradientEnd} 100%)`
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
                        <AccordionContent className={`pb-0 shadow-lg`}>
                            <div
                            className={`pb-0 rounded-b-[17px] text-[14px]
                                ${openItem === `item-${_index}` ? "rounded-t-0" : "rounded-t-[17px]"}
                                `}
                            style={{
                            background: `linear-gradient(90deg, ${hive.gradientStart} 0%, ${hive.gradientEnd} 100%)`,
                            }}>
                            <div 
                                className={`pt-[14px] pb-[14px] pl-[29px] pr-[29px] h-full w-full rounded-b-[17px] bg-[#f3eee6] bg-opacity-55 text-black
                                    ${openItem === `item-${_index}` ? "rounded-t-0" : "rounded-t-[17px]"}
                                    `}
                            >
                                {hive.content}
                            </div>
                            </div>
                            
                        </AccordionContent>
                    </AccordionItem>
                ))}
                </div>
            </Accordion>
            <div className={`flex flex-row md:flex-col w-[350px] md:w-[426px] lg:w-[632px] items-center md:items-end justify-between mt-[30px] font-larken font-light italic text-[18.5px] text-left md:text-right gap-2 md:gap-0`}>
                <p className={`-ml-[12px] md:ml-[0] md:mr[200px] text-left`}>
                    a new creative home <br /> for your buzzing passions.
                </p>
                <a
                    href=""
                    className={`px-[17px] py-[9px] -mr-[73px] md:-mr[150px] rounded-[32px] bg-[#EEBCBEAB] font-larken italic font-light text-[22px] shadow-lg`}
                >
                    join us
                </a>
            </div>
            </div>
        </section>
    );
}
