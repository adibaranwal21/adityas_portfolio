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
      <a href="/projects.html">Projects</a>
      <a href="/contact.html" aria-current="page">Contact</a>
    </nav>
  </header>

  <div class="page-shell">
    <main class="contact-main">
      <section class="contact-content">
        <p class="eyebrow">Get In Touch!</p>
        <h1>Contact Me!</h1>
        <p class="contact-text">
          If you would like to connect, collaborate, or ask a question, share your details below and I will
          get back to you as soon as possible.
        </p>
      </section>

      <section class="contact-form-panel" aria-label="Contact form">
        <form class="contact-form">
          <label for="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name" />

          <label for="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" />

          <label for="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="What is this regarding?" />

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here"></textarea>

          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  </div>
</div>
`
