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
            <h3>hives</h3>
            <Accordion type="single" collapsible>
                {hiveContent.map((hive, _index) => (
                    <AccordionItem
                        value={`item-${_index}`}
                        className="rounded-lg mx-4"
                    >
                        <AccordionTrigger
                            className={`rounded-t-lg bg-gradient-to-r from-[${hive.gradientStart}] to-[${hive.gradientEnd}]`}
                        >
                            <span className="flex items-center">
                                <Image
                                    src={hive.icon}
                                    alt=""
                                    height={40}
                                    width={30}
                                />
                                {hive.hive}
                                <Image
                                    src={hive.pin}
                                    alt=""
                                    height={40}
                                    width={30}
                                />
                            </span>
                        </AccordionTrigger>
                        <AccordionContent
                            className={`rounded-b-lg bg-gradient-to-r from-[${hive.gradientStart}] to-[${hive.gradientEnd}] opacity-50`}
                        >
                            {hive.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="flex">
                <p>
                    a new creative home <br /> for your buzzing passions.
                </p>
                <a
                    href=""
                    className=" rounded-full bg-pink-300 px-4 flex-grow-0"
                >
                    join us
                </a>
            </div>
        </section>
    );
}
