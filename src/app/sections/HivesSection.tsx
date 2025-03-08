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

            <div
                className={`flex flex-col items-center justify-center w-full`}
            >
            
            <h3
            className={`flex left-0 self-start ml-[2%] font-aileron italic text-[36px]`}
            >
                hives
            </h3>
            <div className={`w-full max-w-full flex flex-col items-center justify-center px-4 mx-auto drop-shadow-[4.6px_4px_4px_rgba(0,0,0,0.25)]`}>
            <Accordion type="single" collapsible onValueChange={(value) => setOpenItem(value)}
            className={`w-full flex justify-center px-4 `}>
                <div className={`flex flex-col items-center `}>
                {hiveContent.map((hive, _index) => (
                    <AccordionItem
                        value={`item-${_index}`}
                        className="w-[325px] md:w-[426px] lg:w-[632px] m-1 mx-auto rounded-[17px]"
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
                        <AccordionContent className={`pb-0`}>
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
            
            </div>

            <div className={`flex flex-row lg:flex-col w-[325px] md:w-[426px] lg:w-[632px] lg:-mr-[100px] items-center lg:items-end justify-between mt-[30px] font-larken font-light italic text-[18.5px] text-left gap-2 md:gap-0`}>
                <p className={``}>
                    a new creative home <br /> for your buzzing passions.
                </p>
                <a
                    href=""
                    className={`lg:mt-[12px] px-[24px] py-[2px] rounded-[32px] bg-[#EEBCBEAB] font-larken italic font-light text-[22px] shadow-[0px_5.5px_5.5px_0px_rgba(0,0,0,0.25)]`}
                >
                    join us
                </a>
            </div>

            </div>

            
        </section>
    );
}
