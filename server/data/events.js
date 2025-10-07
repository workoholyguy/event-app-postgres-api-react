const eventData = [
  {
    id: 1,
    name: "Ashley Brooks at The Lou Sobh Amphitheater",
    location: "Cumming City Center",
    date: "2025-10-10",
    time: "19:00:00.000000",
    image:
      "https://exploregeorgia.org/sites/default/files/styles/listing_node_teaser/public/listing_images/event/56894/9864020f96c9f81433b68a51cb751d0c_AshleyBrooksSocialMedia.png?itok=C1vs3SZN",
  },
  {
    id: 2,
    name: "Sunset Jazz Night",
    location: "Atlanta Midtown Park",
    date: "2025-10-11",
    time: "18:30:00.000000",
    image: "https://atljazzfest.com/wp-content/uploads/2025/03/unnamed-1.jpg",
  },
  {
    id: 3,
    name: "Golden Hour Yoga Flow",
    location: "Roswell Riverwalk",
    date: "2025-10-12",
    time: "07:30:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Open Air Cinema: La La Land",
    location: "Marietta Square",
    date: "2025-10-13",
    time: "19:30:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Folk & Firelight Festival",
    location: "Cumming City Center",
    date: "2025-10-14",
    time: "20:00:00.000000",
    image:
      "https://images.unsplash.com/photo-1546778316-dfda79f1c84e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Sunrise Meditation Session",
    location: "Roswell Riverwalk",
    date: "2025-10-15",
    time: "06:30:00.000000",
    image:
      "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Solar Sounds: Live Indie Edition",
    location: "Atlanta Midtown Park",
    date: "2025-10-16",
    time: "17:00:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1687609112015-23bcdb2385f4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Comedy Under The Stars",
    location: "Marietta Square",
    date: "2025-10-17",
    time: "20:30:00.000000",
    image:
      "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?q=80&w=1511&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Sunset Artisan Market",
    location: "Cumming City Center",
    date: "2025-10-18",
    time: "15:00:00.000000",
    image:
      "https://images.unsplash.com/photo-1648580980213-636f9fc05226?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Golden Strings Orchestra",
    location: "Atlanta Midtown Park",
    date: "2025-10-19",
    time: "19:00:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1664303098722-7e5287a4693b?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Morning Rays Run 5K",
    location: "Roswell Riverwalk",
    date: "2025-10-20",
    time: "07:00:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1664537976485-86c3a5d22ce9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Sundown Jazz Quartet",
    location: "Marietta Square",
    date: "2025-10-21",
    time: "19:30:00.000000",
    image:
      "https://images.unsplash.com/photo-1503853585905-d53f628e46ac?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Solar Beats EDM Bash",
    location: "Cumming City Center",
    date: "2025-10-22",
    time: "21:00:00.000000",
    image:
      "https://www.techexplorist.com/wp-content/uploads/2020/01/Sounds-of-the-Solar-Wind.jpg",
  },
  {
    id: 14,
    name: "Radiant Film Night",
    location: "Marietta Square",
    date: "2025-10-23",
    time: "19:00:00.000000",
    image:
      "https://images.unsplash.com/photo-1615563553531-73b8923f54fc?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Solar Bloom Garden Walk",
    location: "Roswell Riverwalk",
    date: "2025-10-24",
    time: "09:00:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Sunburst Comedy Jam",
    location: "Atlanta Midtown Park",
    date: "2025-10-25",
    time: "20:00:00.000000",
    image:
      "https://images.unsplash.com/photo-1756273457065-fec47f621bc5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "Spirit Food Fest",
    location: "Cumming City Center",
    date: "2025-10-26",
    time: "12:00:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1674147611212-4d7ede62638c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    name: "Cinema: Interstellar",
    location: "Marietta Square",
    date: "2025-10-27",
    time: "19:00:00.000000",
    image:
      "https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    name: "Reflections Art Show",
    location: "Atlanta Midtown Park",
    date: "2025-10-28",
    time: "14:00:00.000000",
    image:
      "https://images.unsplash.com/photo-1573421706309-8e71afba54a3?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    name: "Golden Hour Open Mic",
    location: "Roswell Riverwalk",
    date: "2025-10-29",
    time: "18:00:00.000000",
    image:
      "https://images.unsplash.com/photo-1561264974-153c4dacddd2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default eventData;
