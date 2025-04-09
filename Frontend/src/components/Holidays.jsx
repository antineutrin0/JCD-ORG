import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "./SectionTitle";
const Holidays = () => {
  const [events, setEvents] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = "AIzaSyDDErbA3kFwPbD97vd2aK-IOIlYYH5s_kY"; // Replace with your actual key
  const calendarId = encodeURIComponent("en.bd#holiday@group.v.calendar.google.com");
  const timeMin = new Date().toISOString();
  const timeMax = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
          {
            params: {
              key: API_KEY,
              timeMin: timeMin,
              timeMax: timeMax,
              singleEvents: true,
              orderBy: "startTime",
            },
          }
        );
        setEvents(response.data.items.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching holidays:", error);
        setErrorMsg("Failed to load holidays. Please try again later.");
        setLoading(false);
      }
    };
    fetchHolidays();
  }, []);


  return (
    <div className="max-w-6xl mx-auto my-20 px-4">
      <SectionTitle title="Holidays" />
      {loading ? (
        <p className="text-blue-500">Loading...</p>
      ) : errorMsg ? (
        <p className="text-red-500">{errorMsg}</p>
      ) : (
        <div className="relative h-12 overflow-hidden w-full bg-yellow-100 border border-yellow-300 rounded">
          <div className="absolute w-full h-full animate-marquee whitespace-nowrap flex items-center space-x-10">
            {events.map((event, idx) => (
              <span
                key={idx}
                className="inline-block px-4 py-1 text-xl font-semibold "
              >
                📌 {event.start.date} — {event.summary}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Holidays;


