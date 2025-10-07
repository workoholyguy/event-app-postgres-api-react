import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import { getLocationBySlug, locations, slugifyLocation } from "../utils/locations";
import "./Gifts.css";
import "./LocationDetails.css";

const LocationDetails = ({ data = [], isLoading = false }) => {
  const { slug } = useParams();
  const locationInfo = getLocationBySlug(slug);

  const eventsForLocation = useMemo(() => {
    if (!locationInfo) return [];

    return data.filter((event) => {
      if (!event.location) return false;
      return slugifyLocation(event.location) === slug;
    });
  }, [data, locationInfo, slug]);

  if (!locationInfo && !isLoading) {
    return (
      <section className="location-details container">
        <header className="location-details__header">
          <h1>Location not found</h1>
          <p>We couldn't find that neighborhood. Try selecting one of the featured areas below.</p>
        </header>
        <div className="location-details__chips">
          {locations.map((loc) => (
            <Link key={loc.slug} className="secondary" to={`/locations/${loc.slug}`}>
              {loc.name}
            </Link>
          ))}
        </div>
        <p>Or head back to the <Link to="/">main events feed</Link>.</p>
      </section>
    );
  }

  return (
    <section className="location-details container">
      <header className="location-details__header">
        <p className="location-details__eyebrow">Featured neighborhood</p>
        <h1>{locationInfo?.name ?? "Exploring events"}</h1>
        <p className="location-details__description">{locationInfo?.description}</p>
        <div className="location-details__actions">
          <Link className="secondary" to="/">Back to all events</Link>
        </div>
      </header>

      {isLoading ? (
        <div className="loading-state">Loading events…</div>
      ) : eventsForLocation.length > 0 ? (
        <div className="events-grid grid">
          {eventsForLocation.map((event) => (
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
        <p className="noResults">No events are scheduled here yet—check back soon!</p>
      )}
    </section>
  );
};

export default LocationDetails;
