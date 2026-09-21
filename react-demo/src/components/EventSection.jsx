// function EventSection() {
//   return (
//     <section id="events" className="events-section">
//       <p className="section-label">Upcoming Activities</p>

//       <h2>Explore Campus Events</h2>

//       <div className="event-grid">
//         <article className="event-card">
//           <p className="event-category">Technology</p>

//           <h3>MERN Stack Workshop</h3>

//           <p>
//             Learn the basics of MongoDB, Express, React, and Node.js through a
//             practical workshop.
//           </p>

//           <p>
//             <strong>Date:</strong> 25 September 2026
//           </p>

//           <p>
//             <strong>Location:</strong> Computer Lab 1
//           </p>

//           <button type="button">View Details</button>
//         </article>

//         <article className="event-card">
//           <p className="event-category">Technology</p>

//           <h3>College Hackathon</h3>

//           <p>
//             Form a team, solve a real problem, and present your solution to
//             mentors.
//           </p>

//           <p>
//             <strong>Date:</strong> 28 September 2026
//           </p>

//           <p>
//             <strong>Location:</strong> Main Auditorium
//           </p>

//           <button type="button">View Details</button>
//         </article>

//         <article className="event-card">
//           <p className="event-category">Sports</p>

//           <h3>Campus Football Trials</h3>

//           <p>
//             Join football team selection trials. Bring your college ID card.
//           </p>

//           <p>
//             <strong>Date:</strong> 2 October 2026
//           </p>

//           <p>
//             <strong>Location:</strong> College Ground
//           </p>

//           <button type="button">View Details</button>
//         </article>
//       </div>
//     </section>
//   );
// }

// export default EventSection;
// import EventCard from "./EventCard";

// function EventSection() {
//   return (
//     <section id="events" className="events-section">
//       <p className="section-label">Upcoming Activities</p>

//       <h2>Explore Campus Events</h2>

//       <div className="event-grid">
//         <EventCard
//           title="MERN Stack Workshop"
//           category="Technology"
//           date="25 September 2026"
//           time="10:00 AM"
//           location="Computer Lab 1"
//           description="Learn the basics of MongoDB, Express, React, and Node.js through a practical workshop."
//         />

//         <EventCard
//           title="College Hackathon"
//           category="Technology"
//           date="28 September 2026"
//           time="9:00 AM"
//           location="Main Auditorium"
//           description="Form a team, solve a real problem, and present your solution to mentors."
//         />

//         <EventCard
//           title="Photography Club Meet"
//           category="Club"
//           date="30 September 2026"
//           time="2:00 PM"
//           location="Seminar Hall"
//           description="Meet fellow photography enthusiasts and learn basic composition techniques."
//         />

//         <EventCard
//           title="Campus Football Trials"
//           category="Sports"
//           date="2 October 2026"
//           time="4:00 PM"
//           location="College Ground"
//           description="Join football team selection trials and bring your college ID card."
//         />
//       </div>
//     </section>
//   );
// }

// export default EventSection;
// import EventCard from "./EventCard";

// function EventSection({ events }) {
//   return (
//     <section id="events" className="events-section">
//       <div className="section-heading">
//         <div>
//           <p className="section-label">Upcoming Activities</p>

//           <h2>Explore Campus Events</h2>
//         </div>

//         <p>{events.length} events available</p>
//       </div>

//       {events.length === 0 ? (
//         <p>No events are available right now.</p>
//       ) : (
//         <div className="event-grid">
//           {events.map(function (event) {
//             return (
//               <EventCard
//                 key={event.id}
//                 title={event.title}
//                 category={event.category}
//                 date={event.date}
//                 time={event.time}
//                 location={event.location}
//                 description={event.description}
//               />
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// }
// export default EventSection;
import { useState } from "react";
import EventCard from "./EventCard";

function EventSection({
  events,
  onDeleteEvent,
}) {
  const [searchText, setSearchText] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredEvents = events.filter(function (
    event
  ) {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="events"
      className="events-section"
    >
      <div className="section-heading">
        <div>
          <p className="section-label">
            Upcoming Activities
          </p>

          <h2>Explore Campus Events</h2>
        </div>

        <p>
          {filteredEvents.length} events shown
        </p>
      </div>

      <div className="search-filter-bar">
        <input
          type="text"
          value={searchText}
          onChange={function (event) {
            setSearchText(event.target.value);
          }}
          placeholder="Search by event title"
        />

        <select
          value={selectedCategory}
          onChange={function (event) {
            setSelectedCategory(
              event.target.value
            );
          }}
        >
          <option value="All">
            All Categories
          </option>

          <option value="Technology">
            Technology
          </option>

          <option value="Sports">
            Sports
          </option>

          <option value="Cultural">
            Cultural
          </option>

          <option value="Club">
            Club
          </option>

          <option value="Workshop">
            Workshop
          </option>
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <p className="empty-message">
          No matching events found.
        </p>
      ) : (
        <div className="event-grid">
          {filteredEvents.map(function (event) {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                onDeleteEvent={onDeleteEvent}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default EventSection;