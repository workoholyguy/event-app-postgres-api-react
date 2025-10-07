import React from "react";
import "./Card.css";

const Card = ({ id, name, date, time, location, image }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "TBD";

  const cleanTime = time ? time.split(".")[0] : "";
  const formattedTime = cleanTime
    ? new Date(`1970-01-01T${cleanTime}`).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "TBD";

  return (
    <article
      className="event-card"
      aria-labelledby={`event-${id}`}
      tabIndex={0}
    >
      <figure className="event-card__media">
        <img src={image} alt={name} loading="lazy" />
        <figcaption className="visually-hidden">
          {name} • {formattedDate} at {formattedTime} • {location}
        </figcaption>
        <div className="event-card__overlay" aria-hidden="true">
          <h3 id={`event-${id}`}>{name}</h3>
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
          <p>{location}</p>
        </div>
      </figure>
    </article>
  );
};

export default Card;
