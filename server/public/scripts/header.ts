const header = document.querySelector("header");

if (header) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "header-container";

  const headerLeft = document.createElement("div");
  headerLeft.className = "header-left";

  const logo = document.createElement("img");
  logo.src = "/logo.svg";
  logo.alt = "Language Library logo";

  const title = document.createElement("h1");
  title.textContent = "Language Library";

  headerLeft.append(logo, title);

  const headerRight = document.createElement("div");
  headerRight.className = "header-right";

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", () => {
    window.location.href = "/";
  });

  headerRight.appendChild(homeButton);
  headerContainer.append(headerLeft, headerRight);
  header.appendChild(headerContainer);
}
