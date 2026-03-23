import './style.css'

document.querySelector('#app').innerHTML = `
<div class="page-shell">
  <header class="navbar">
    <a class="brand-link" href="/">
      <span class="name-primary">Aditya</span>
      <span class="name-secondary">Baranwal</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="/" aria-current="page">Home</a>
      <a href="https://www.tamu.edu/" target="_blank" rel="noreferrer">Texas A&M</a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Personal</a>
    </nav>
  </header>

  <main class="hero-section" id="home">
    <p class="intro">Hello, I am</p>
    <h1>
      <span class="name-primary">Aditya</span>
      <span class="name-secondary">Baranwal</span>
    </h1>
    <p class="tagline">Crafting modern web experiences with clean design and smooth interactions.</p>
    <div class="action-buttons">
      <a class="cta cta-solid" href="https://www.tamu.edu/" target="_blank" rel="noreferrer">Visit Texas A&M</a>
      <a class="cta cta-outline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Visit Personal Page</a>
    </div>
  </main>
</div>
`
