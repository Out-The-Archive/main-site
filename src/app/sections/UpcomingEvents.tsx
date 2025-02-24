"use client"
import UpcomingEvents from "../components/upcomingEvents";

export default function UpcomingEventsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold italic mb-6">Upcoming Events</h3>
        <UpcomingEvents />
      </div>
    </section>
  );
}
