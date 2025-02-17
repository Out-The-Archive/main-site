import Image from "next/image";
import "./hive.css";
import React from "react";
import * as assets from "../../public/svg";
import { Hivecard_Mobile } from "./components/hivecard-mobile";
import { Hivecard_Desktop } from "./components/hivecard-desktop";
import pin from "./assets/detail-pin-blue.png";
import { Accordion } from "@szhsin/react-accordion";
export default async function Home() {
    return (
        <>
            <div className="flex flex-row">
                <div>
                    <Hivecard_Mobile hive={"design"} />
                </div>
                <div>
                    <Hivecard_Mobile hive={"media"} />
                </div>
                <div>
                    <Hivecard_Mobile hive={"music"} />
                </div>
            </div>
            <Accordion>
                <Hivecard_Desktop hive="design" desc="short description 1" />
                <Hivecard_Desktop hive="media" desc="short description 2" />
                <Hivecard_Desktop hive="music" desc="short description 3" />
            </Accordion>
        </>
    );
}
