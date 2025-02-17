import Landing from "./sections/Landing";
import HivesSection from "./sections/HivesSection";
import Buzzlight from "./sections/Buzzlight";

export default async function Home() {
    return (
        <main>
            <Landing />
            <Buzzlight />
            <HivesSection />
        </main>
    );
}
