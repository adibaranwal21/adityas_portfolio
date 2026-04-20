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
      <a href="/about.html">About</a>
      <a href="/projects.html" aria-current="page">Projects</a>
      <a href="/contact.html">Contact</a>
    </nav>
  </header>

  <div class="page-shell">
    <main class="projects-main">
      <section class="project-visuals" aria-label="Project image placeholders">
        <div class="image-placeholder"><span>Project Image 1</span></div>
        <div class="image-placeholder"><span>Project Image 2</span></div>
        <div class="image-placeholder"><span>Project Image 3</span></div>
      </section>

      <section class="project-content">
        <h1>Projects!</h1>
        <p class="project-text">
          Here's some stuff I've worked on in Texas A&M and outside of it!
        </p>
      </section>
    </main>
  </div>
</div>
`
