import './style.css'

document.querySelector('#app').innerHTML = `
<div class="site">
  <header class="navbar">
    <a class="brand-link" href="/">
      <span class="name-primary">Aditya</span>
      <span class="name-secondary">Baranwal</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="/">Home</a>
      <a href="/about.html" aria-current="page">About</a>
      <a href="https://www.linkedin.com/in/aditya-baranwal-249b32389/" target="_blank" rel="noreferrer">Projects</a>
      <a href="#" rel="noreferrer">Contact</a>
    </nav>
  </header>

  <div class="page-shell">
    <main class="about-main">
      <section class="about-content">
        <p class="eyebrow">About Me</p>
        <h1>Aditya Baranwal</h1>
        <p class="about-text">
          I am a freshman in General Engineering at Texas A&M University, working toward a future in
          computer science. I enjoy building clean, practical, and modern digital experiences.
        </p>
        <p class="about-text">
          This page is where I will share more about my background, interests, and ongoing projects as
          I continue learning and creating.
        </p>
      </section>

      <aside class="photo-panel" aria-label="Photo placeholder">
        <div class="photo-placeholder">
          <span>Add your photo here</span>
        </div>
      </aside>
    </main>
  </div>
</div>
`
