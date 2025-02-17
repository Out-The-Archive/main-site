import Swipeable from "../components/Swipeable";

export default function Landing() {
    return (
        <div>
            <div>
                <h1>OTA</h1>
                <h4>(out the archive)."</h4>
                <a href="#" className="border-2 rounded-full">
                    buzz with us
                </a>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10 h-screen bg-gray-100">
                <Swipeable />
            </div>
        </div>
    );
}
