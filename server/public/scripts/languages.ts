const fetchLanguages = async () => {
  const response = await fetch("/languages");

  if (!response.ok) {
    throw new Error(`Failed to fetch languages: ${response.status}`);
  }

  return response.json();
};

const createMetaParagraph = (label, value) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `<span>${label}:</span> ${value}`;
  return paragraph;
};

const renderLanguages = async () => {
  try {
    const data = await fetchLanguages();
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
      return;
    }

    mainContent.replaceChildren();

    if (!data?.length) {
      const noLanguagesMsg = document.createElement("h2");
      noLanguagesMsg.textContent = "No Languages Available 😞";
      mainContent.appendChild(noLanguagesMsg);
      return;
    }

    data.forEach((language) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");
      topContainer.style.backgroundImage = `url(${language.image})`;

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      const title = document.createElement("h3");
      title.textContent = language.name;

      const paradigm = createMetaParagraph("Paradigm", language.paradigm);
      const firstAppeared = createMetaParagraph(
        "First Appeared",
        language.firstAppeared
      );

      const link = document.createElement("a");
      link.textContent = "Explore >";
      link.href = `/languages/${language.id}`;

      bottomContainer.append(title, paradigm, firstAppeared, link);
      card.append(topContainer, bottomContainer);
      mainContent.appendChild(card);
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
      image.alt = language.name;
    }

    const name = document.getElementById("name");
    if (name) {
      name.textContent = language.name;
    }

    const designedBy = document.getElementById("designedBy");
    if (designedBy) {
      designedBy.innerHTML = `<span>Designed By:</span> ${language.designedBy}`;
    }

    const firstAppeared = document.getElementById("firstAppeared");
    if (firstAppeared) {
      firstAppeared.innerHTML = `<span>First Appeared:</span> ${language.firstAppeared}`;
    }

    const typing = document.getElementById("typing");
    if (typing) {
      typing.innerHTML = `<span>Typing Discipline:</span> ${language.typing}`;
    }

    const paradigm = document.getElementById("paradigm");
    if (paradigm) {
      paradigm.innerHTML = `<span>Paradigm:</span> ${language.paradigm}`;
    }

    const description = document.getElementById("description");
    if (description) {
      description.textContent = language.description;
    }

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
