const LOCATIONS = [
  {
    slug: "cumming-city-center",
    name: "Cumming City Center",
    description:
      "Cumming City Center blends historic charm with a modern promenade—perfect for outdoor concerts, artisan markets, and family-friendly festivals beneath the Georgia sky.",
  },
  {
    slug: "atlanta-midtown-park",
    name: "Atlanta Midtown Park",
    description:
      "Atlanta Midtown Park sits in the heart of the arts district, where skyline views, music pop-ups, and food trucks mix for vibrant after-work happenings.",
  },
  {
    slug: "roswell-riverwalk",
    name: "Roswell Riverwalk",
    description:
      "Roswell Riverwalk winds along the Chattahoochee with sunrise yoga lawns, riverside trails, and sun-dappled clearings for wellness gatherings.",
  },
  {
    slug: "marietta-square",
    name: "Marietta Square",
    description:
      "Marietta Square is the historic crown of Cobb County—cobbled streets, indie theaters, and open-air plazas host cinema nights and community celebrations.",
  },
];

const LOCATION_MAP = LOCATIONS.reduce((acc, location) => {
  acc[location.slug] = location;
  return acc;
}, {});

export const locations = LOCATIONS;

export const getLocationBySlug = (slug) => LOCATION_MAP[slug];

export const slugifyLocation = (name = "") =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
