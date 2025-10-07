const fetchLanguages = async () => {
  const response = await fetch("/events");

  if (!response.ok) {
    throw new Error(`Failed to fetch languages: ${response.status}`);
  }

  return response.json();
};

const createChip = (text) => {
  const chip = document.createElement("span");
  chip.className = "language-chip";
  chip.textContent = text;
  return chip;
};

const populateChips = (container, rawValue) => {
  if (!container) {
    return;
  }

  container.replaceChildren();

  if (!rawValue) {
    container.textContent = "Not specified";
    return;
  }

  rawValue
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .forEach((item) => container.appendChild(createChip(item)));
};

const createLanguageCard = (language) => {
  const card = document.createElement("article");
  card.className = "language-card";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = language.image;
  image.alt = `${language.name} logo`;
  figure.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = language.name;

  const description = document.createElement("p");
  description.className = "muted";
  description.textContent = language.description;

  const metadata = document.createElement("ul");
  const paradigmItem = document.createElement("li");
  paradigmItem.innerHTML = `<strong>Paradigm:</strong> ${language.paradigm}`;
  const typingItem = document.createElement("li");
  typingItem.innerHTML = `<strong>Typing:</strong> ${language.typing}`;
  const firstAppearedItem = document.createElement("li");
  firstAppearedItem.innerHTML = `<strong>First appeared:</strong> ${language.firstAppeared}`;
  metadata.append(paradigmItem, typingItem, firstAppearedItem);

  const link = document.createElement("a");
  link.href = `/languages/${language.id}`;
  link.textContent = "View details";
  link.setAttribute("role", "button");
  link.className = "secondary";

  card.append(figure, title, description, metadata, link);
  return card;
};

const renderLanguages = async () => {
  try {
    const data = await fetchLanguages();
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
      return;
    }

    mainContent.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Programming Languages";

    const lead = document.createElement("p");
    lead.className = "muted";
    lead.textContent =
      "Browse foundational and modern programming languages with quick reference details.";

    const grid = document.createElement("div");
    grid.className = "language-grid";

    mainContent.append(heading, lead, grid);

    if (!data?.length) {
      const noLanguagesMsg = document.createElement("h2");
      noLanguagesMsg.textContent = "No languages available";
      grid.replaceChildren(noLanguagesMsg);
      return;
    }

    data.forEach((language) => {
      grid.appendChild(createLanguageCard(language));
    });
  } catch (error) {
    console.error("Failed to render languages", error);
  }
};

const renderLanguage = async () => {
  try {
    const pathParts = window.location.pathname
      .replace(/^\/+|\/+$/g, "")
      .split("/");
    const requestedId = Number(pathParts.at(-1));

    if (!requestedId) {
      window.location.href = "/404.html";
      return;
    }

    const data = await fetchLanguages();
    const language = data.find((item) => item.id === requestedId);

    if (!language) {
      window.location.href = "/404.html";
      return;
    }

    const image = document.getElementById("image");
    if (image instanceof HTMLImageElement) {
      image.src = language.image;
      image.alt = `${language.name} logo`;
    }

    const name = document.getElementById("name");
    if (name) {
      name.textContent = language.name;
    }

    const description = document.getElementById("description");
    if (description) {
      description.textContent = language.description;
    }

    const designedBy = document.getElementById("designedBy");
    if (designedBy) {
      designedBy.textContent = language.designedBy || "Unknown";
    }

    const firstAppeared = document.getElementById("firstAppeared");
    if (firstAppeared) {
      firstAppeared.textContent = language.firstAppeared
        ? String(language.firstAppeared)
        : "N/A";
    }

    const paradigmChips = document.getElementById("paradigmChips");
    populateChips(paradigmChips, language.paradigm);

    const typingBadges = document.getElementById("typingBadges");
    populateChips(typingBadges, language.typing);

    document.title = `Language Library - ${language.name}`;
  } catch (error) {
    console.error("Failed to render language", error);
    window.location.href = "/404.html";
  }
};

const requestedPath = window.location.pathname.replace(/^\/+|\/+$/g, "");

if (!requestedPath || requestedPath === "index.html") {
  renderLanguages();
} else if (requestedPath.startsWith("languages")) {
  renderLanguage();
} else if (requestedPath === "404.html") {
  // Already on the 404 page; nothing to render here.
} else {
  window.location.href = "/404.html";
}
