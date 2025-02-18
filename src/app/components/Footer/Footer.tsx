import BoardImage from "./BoardImage";
import boardMembers from "./boardMembers";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#FFF8F2] relative">
            <div className="font-dmSans flex flex-col ms-5 mb-7">
                <span className="flex gap-4">
                    <Image
                        src="/icons/mail.svg"
                        alt="mail icon"
                        width={18}
                        height={18}
                        className="relative bottom-0 group-hover:opacity-0"
                    />
                    <a href="mailto:ota@ucsd.edu" className="underline">
                        outthearchive@gmail.com
                    </a>
                </span>
                <span className="flex gap-4">
                    <Image
                        src="/icons/insta.svg"
                        alt="instagram icon"
                        width={18}
                        height={18}
                        className="relative bottom-0 group-hover:opacity-0"
                    />
                    <a
                        href="https://www.instagram.com/otaucsd/"
                        className="underline"
                    >
                        @otaucsd
                    </a>
                </span>
            </div>
            <h3 className="font-larken font-bold italic ms-2 text-8xl capitalize">
                out <br className="md:hidden" />
                the <br className="md:hidden" />
                archive
            </h3>
            <div className="flex relative bottom-10">
                {boardMembers.map((member) => (
                    <BoardImage key={member} member={member} />
                ))}
            </div>
        </footer>
    );
}
