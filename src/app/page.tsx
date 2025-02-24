import Landing from "./sections/Landing";
import UpcomingEvents from "./sections/UpcomingEvents";
import HivesSection from "./sections/HivesSection";
import Buzzlight from "./sections/Buzzlight";

export default async function Home() {
    return (
        <main>
            <Landing />
            <UpcomingEvents />
            <Buzzlight />
            <HivesSection />
        </main>
    );
}