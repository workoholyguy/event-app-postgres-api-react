import "./App.css";
import React, { useEffect, useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import Events from "./pages/Events";
import LocationDetails from "./pages/LocationDetails";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Unable to load events", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const element = useRoutes([
    { path: "/", element: <Events data={events} isLoading={isLoading} /> },
    {
      path: "/locations/:slug",
      element: <LocationDetails data={events} isLoading={isLoading} />,
    },
    { path: "/*", element: <PageNotFound /> },
  ]);

  const statsFallback = events.length > 0 ? `${events.length}` : "20+";

  return (
    <div className="app" data-theme="dark">
      <header className="container">
        <nav className="primary-nav">
          <ul>
            <li>
              <Link to="/" className="brand">
                <img src="/logo.png" alt="Solstice Events" />
                <span>Solstice Events</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main id="listing" className="container">
        {element}
      </main>

      <footer className="container footer"></footer>
    </div>
  );
};

export default App;
