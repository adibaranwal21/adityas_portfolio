import './style.css'

document.querySelector('#app').innerHTML = `
<div class="site">
  <header class="navbar">
    <a class="brand-link" href="/" aria-current="page">
      <span class="name-primary">Aditya</span>
      <span class="name-secondary">Baranwal</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="/about.html">About</a>
      <a href="https://www.linkedin.com/in/aditya-baranwal-249b32389/" target="_blank" rel="noreferrer">Projects</a>
      <a href="placeholder" target="_blank" rel="noreferrer">Contact</a>
    </nav>
  </header>

  <div class="page-shell">
  <main class="hero-section" id="home">
    <p class="intro">Hello, I'm</p>
    <h1>
      <span class="name-primary">Aditya</span>
      <span class="name-secondary">Baranwal!</span>
    </h1>
    <h2>
      <span class="greeting-subtitle">Welcome!</span>
    </h2>
    <p class="tagline">I'm a freshman in general engineering at Texas A&M, and I know I’m gonna be a computer science major. This is just a website  where I’ll put up stuff about me and what I’m doing. Explore more to find out!</p>
    <div class="action-buttons">
      <a class="cta cta-solid" href="https://www.tamu.edu/" target="_blank" rel="noreferrer"> Texas A&M</a>
      <a class="cta cta-outline" href="https://www.linkedin.com/in/aditya-baranwal-249b32389/" target="_blank" rel="noreferrer">More</a>
    </div>
  </main>
  </div>
</div>
`
