/* ==========================================================
   RENDER + MOTION
   Reads everything from DATA (js/data.js), so you only edit content there.
   ========================================================== */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const pad = (n) => String(n).padStart(2, "0");

  const logo = (slug) =>
    slug
      ? `<img class="logo" src="https://cdn.simpleicons.org/${slug}" alt="" loading="lazy" onerror="this.remove()">`
      : "";

  /* ---------- Render ---------- */

  function renderStats() {
    document.getElementById("stats").innerHTML = DATA.stats
      .map((s, i) => `
        <li class="reveal" style="--d:${i}">
          <span class="stat-num">${esc(s.value)}</span>
          <span class="mono">${esc(s.label)}</span>
        </li>`).join("");
  }

  function renderExperience() {
    document.getElementById("experience-list").innerHTML = DATA.experience
      .map((j) => `
        <article class="job reveal">
          <div class="job-meta mono">
            <span>${esc(j.period)}</span>
            <span>${esc(j.place)}</span>
          </div>
          <div class="job-main">
            <h3 class="job-role">${esc(j.role)}</h3>
            <p class="job-company">${esc(j.company)}${j.subtitle ? " · " + esc(j.subtitle) : ""}</p>
          </div>
          <ul class="job-points">
            ${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}
          </ul>
        </article>`).join("");
  }

  function renderSkills() {
    document.getElementById("skills-list").innerHTML = DATA.skills
      .map((g) => `
        <div class="skill-group reveal">
          <h3 class="group-title mono">${esc(g.group)}</h3>
          <ul class="skill-grid">
            ${g.items.map((it) => `
              <li class="skill">${logo(it.logo)}<span>${esc(it.name)}</span></li>`).join("")}
          </ul>
        </div>`).join("");
  }

  function renderProjects() {
    document.getElementById("projects-list").innerHTML = DATA.projects
      .map((p, i) => `
        <article class="project reveal" style="--d:${i % 3}">
          <span class="p-num mono">${pad(i + 1)}</span>
          <div class="p-main">
            <h3 class="p-title">
              <a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)} ↗</a>
            </h3>
            <p class="p-period mono">${esc(p.period)}</p>
          </div>
          <p class="p-desc">${esc(p.desc)}</p>
          <p class="p-stack mono">${p.stack.map(esc).join(" / ")}</p>
        </article>`).join("");
  }

  function renderEducation() {
    document.getElementById("education-list").innerHTML = DATA.education
      .map((e, i) => `
        <article class="edu reveal" style="--d:${i}">
          <span class="mono">${esc(e.year)}</span>
          <div class="edu-score" style="margin-top:1.2rem">${esc(e.score)}</div>
          <span class="mono">${esc(e.scoreLabel)}</span>
          <h3 class="edu-degree">${esc(e.degree)}</h3>
          <p class="edu-school">${esc(e.school)}</p>
          <p class="edu-meta mono">${esc(e.meta)}</p>
        </article>`).join("");
  }

  function renderCerts() {
    document.getElementById("certs-list").innerHTML = DATA.certifications
      .map((c) => `
        <article class="cert reveal">
          <h3 class="cert-name">${esc(c.name)}</h3>
          <span class="cert-issuer">${esc(c.issuer)}</span>
          <span class="mono">${esc(c.date)}</span>
          <span class="cert-id mono">ID · ${esc(c.id)}</span>
        </article>`).join("");
  }

  function renderAwards() {
    document.getElementById("awards-list").innerHTML = DATA.awards
      .map((a, i) => `
        <article class="award reveal" style="--d:${i % 3}">
          <span class="award-n">${pad(i + 1)}</span>
          <div>
            <h3 class="award-title">${esc(a.title)}</h3>
            <p class="award-meta mono">${esc(a.meta)}</p>
            <p class="award-desc">${esc(a.desc)}</p>
          </div>
        </article>`).join("");
  }

  function renderLanguages() {
    document.getElementById("languages-list").innerHTML = DATA.languages
      .map((l, i) => `
        <div class="lang reveal" style="--d:${i}">
          <div class="lang-name">${esc(l.name)}</div>
          <p class="lang-level mono">${esc(l.level)}</p>
        </div>`).join("");
  }

  function renderSocials() {
    document.getElementById("socials").innerHTML = DATA.socials
      .map((s) => `<li><a href="${esc(s.url)}" ${s.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a></li>`)
      .join("");
  }

  /* ---------- Motion ---------- */

  function setupReveal() {
    // Stagger delays for elements that carry data-delay (hero).
    document.querySelectorAll("[data-delay]").forEach((el) => {
      el.style.setProperty("--d", el.dataset.delay);
    });

    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => io.observe(el));
  }

  function setupActiveNav() {
    const links = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("main section[id]");
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => io.observe(s));
  }

  /* ---------- Boot ---------- */

  function init() {
    renderStats();
    renderExperience();
    renderSkills();
    renderProjects();
    renderEducation();
    renderCerts();
    renderAwards();
    renderLanguages();
    renderSocials();
    setupReveal();
    setupActiveNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
