"use client";

import React from "react";

const events = [
  { id: 1, name: "Event One", date: "Jan 1", location: "New York" },
  { id: 2, name: "Event Two", date: "Feb 14", location: "Los Angeles" },
  { id: 3, name: "Event Three", date: "Mar 3", location: "Chicago" },
];

const getCurveOffset = (index: number, total: number) => {
  const amplitude = 20; // controls how high/low the curve is
  const frequency = Math.PI / total; // ensures smooth wave distribution
  return Math.sin(index * frequency) * amplitude;
};

const UpcomingEvents: React.FC = () => {
  return (
    <section className="relative overflow-x-auto py-10">
      {/* clothesline */}
      <div className="absolute top-6 left-0 w-full h-8">
        <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q125,0 250,50 T500,50"
            fill="transparent"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* event Cards */}
      <div className="flex gap-6 px-4 overflow-x-scroll scrollbar-hide">
        {events.map((event, index) => {
          const yOffset = getCurveOffset(index, events.length); // calculate the vert position

          return (
            <div key={event.id} className="relative flex flex-col items-center" style={{ marginTop: `${yOffset}px` }}>
              {/* clothespin */}
              <div className="absolute -top-6">
                <img src="/clothespin.png" alt="Clothespin" className="w-6 h-12" />
              </div>

              {/* card */}
              <div className="w-56 h-72 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center border border-gray-200">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <p className="font-bold">{event.name}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingEvents;
