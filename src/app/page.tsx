import HivesSection from "./sections/HivesSection";
import Buzzlight from "./sections/Buzzlight";

export default async function Home() {
    return (
        <main>
            <Buzzlight />
            <HivesSection />
        </main>
    );
}
