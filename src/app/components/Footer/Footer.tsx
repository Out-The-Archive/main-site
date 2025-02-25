import BoardImage from "./BoardImage";
import boardMembers from "./boardMembers";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#FFF8F2] relative overflow-hidden rounded-t-3xl sm:p-4 sm:pb-0">
            <div className="font-dmSans flex flex-col ms-3 mb-7 sm:ms-5">
                <span className="flex gap-4">
                    <Image
                        src="/icons/mail.svg"
                        alt="mail icon"
                        width={18}
                        height={18}
                        className="relative bottom-0 group-hover:opacity-0"
                    />
                    <a href="mailto:ota@ucsd.edu" className="underline text-sm">
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
                        className="underline text-sm"
                    >
                        @otaucsd
                    </a>
                </span>
                <span className="flex gap-4">
                    <Image
                        src="/icons/feedback.svg"
                        alt="feedback icon"
                        width={18}
                        height={18}
                        className="relative bottom-0 group-hover:opacity-0"
                    />
                    <a href="#" className="underline text-sm">
                        feedback form
                    </a>
                </span>
            </div>
            <h3 className="font-larken font-bold italic ms-2 text-8xl capitalize lg:text-[120px] xl:text-[160px]">
                out <br className="md:hidden" />
                the <br className="md:hidden" />
                archive
            </h3>
            <div className="flex relative justify-evenly bottom-10 px-2 min-w-[350px] sm:px-0 ">
                {boardMembers.map((member) => (
                    <BoardImage
                        key={member.name}
                        name={member.name}
                        jumpingScale={member.jumpingScale}
                        jumpHeight={member.jumpHeight}
                    />
                ))}
            </div>
        </footer>
    );
}
