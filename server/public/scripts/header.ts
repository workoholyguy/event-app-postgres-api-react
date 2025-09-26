const header = document.querySelector("header");

if (header) {
  header.innerHTML = `
    <nav class="container-fluid">
      <ul>
        <li>
          <a href="/" class="contrast" aria-label="Language Library home">
            <strong>Language Library</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li><a href="/" role="button">Home</a></li>
      </ul>
    </nav>
  `;
}
