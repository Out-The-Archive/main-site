import BuzzlightComponent from "../components/buzzlight";

export default function Buzzlight() {
    return (
        <section> 
            <h3 className="font-aileron text-[32px] lg:text-[36px] font-bold italic pl-[27px] mb-[12px]">buzzlights</h3>
            <div className="w-full overflow-x-auto no-scrollbar">
                <div className="flex justify-center min-w-max">
                    <div className="lg:hidden">
                        <div className="flex gap-28 ms-72">
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibeeeeee" desc="Mixed Media" />
                        </div>
                        <div className="flex gap-28 ms-36 -mt-20">
                            <BuzzlightComponent videoSrc="/jollibee.mp4 " title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                        </div>
                        <div className="flex gap-28 -mt-20">
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Mediaaaaaaa" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                        </div>
                        <div className="flex gap-28 ms-36 -mt-20">
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:flex-col">
                        <div className="flex gap-32 ms-48">
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                        </div>
                        <div className="flex gap-32 -mt-24">
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                            <BuzzlightComponent videoSrc="/jollibee.mp4" title="Jollibee" desc="Mixed Media" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
