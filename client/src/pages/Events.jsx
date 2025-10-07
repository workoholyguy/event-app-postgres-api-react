import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Gifts.css";
import Card from "../components/Card";
import Search from "../components/Search";
import { locations } from "../utils/locations";

const Events = ({ data = [], isLoading = false }) => {
  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const availableLocations = useMemo(() => {
    const uniqueLocations = new Set();
    data.forEach((event) => {
      if (event.location) {
        uniqueLocations.add(event.location);
      }
    });

    return Array.from(uniqueLocations).sort();
  }, [data]);

  const filteredEvents = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    const trimmedLocation = locationFilter.trim().toLowerCase();

    return data.filter((event) => {
      const name = event.name ? event.name.toLowerCase() : "";
      const location = event.location ? event.location.toLowerCase() : "";

      const matchesQuery =
        trimmedQuery.length === 0 ||
        name.includes(trimmedQuery) ||
        location.includes(trimmedQuery);

      const matchesLocation =
        trimmedLocation.length === 0 ||
        location === trimmedLocation;

      return matchesQuery && matchesLocation;
    });
  }, [data, locationFilter, query]);

  const hasResults = filteredEvents.length > 0;

  return (
    <section className="Gifts">
      <div className="location-quick-links" aria-label="Browse events by location">
        {locations.map((location) => (
          <Link key={location.slug} className="secondary" to={`/locations/${location.slug}`}>
            {location.name}
          </Link>
        ))}
      </div>

      <Search
        query={query}
        onQueryChange={setQuery}
        selectedLocation={locationFilter}
        onLocationChange={setLocationFilter}
        locations={availableLocations}
      />

      {isLoading ? (
        <div className="loading-state">Loading events…</div>
      ) : hasResults ? (
        <div className="events-grid grid">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              id={event.id}
              image={event.image}
              name={event.name}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <h3 className="noResults">No events match your filters just yet.</h3>
      )}
    </section>
  );
};

export default Events;
