const h = document.documentElement,
  header = document.querySelector("#header"),
  menu = document.querySelector("#navMenu"),
  hamb = document.querySelector("#hamburger"),
  themeToggle = document.querySelector("#themeToggle"),
  contactForm = document.querySelector("#contactForm"),
  formStatus = document.querySelector("#formStatus"),
  year = document.querySelector("#year");
const nav = () => header.classList.toggle("header-scrolled", scrollY > 16);
nav();
addEventListener("scroll", nav, { passive: true });
const setMenu = (open) => {
  menu.classList.toggle("open", open);
  hamb.setAttribute("aria-expanded", String(open));
  hamb.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  hamb.textContent = open ? "✕" : "☰";
};
hamb.onclick = () => setMenu(!menu.classList.contains("open"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    setMenu(false);
    hamb.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setMenu(false);
});
document
  .querySelectorAll(".nav-link")
  .forEach((a) => (a.onclick = () => setMenu(false)));
themeToggle.onclick = () => {
  h.classList.toggle("dark");
  try {
    localStorage.theme = h.classList.contains("dark") ? "dark" : "light";
  } catch (_) {
    /* Theme still works when storage is unavailable. */
  }
  themeToggle.setAttribute(
    "aria-pressed",
    String(h.classList.contains("dark"))
  );
};
themeToggle.setAttribute("aria-pressed", String(h.classList.contains("dark")));
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach((link) => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  },
  { rootMargin: "-15% 0px -65% 0px" }
);
document
  .querySelectorAll("main section[id]")
  .forEach((section) => sectionObserver.observe(section));
const ro = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        ro.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((e) => ro.observe(e));
document.querySelectorAll(".filter").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelectorAll(".filter").forEach((x) => {
        x.classList.remove("active");
        x.setAttribute("aria-pressed", "false");
      });
      b.classList.add("active");
      b.setAttribute("aria-pressed", "true");
      document
        .querySelectorAll(".project")
        .forEach((x) =>
          x.classList.toggle(
            "hidden-project",
            b.dataset.filter != "all" && x.dataset.category != b.dataset.filter
          )
        );
    })
);
document
  .querySelectorAll(".filter")
  .forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.classList.contains("active"))
    )
  );
contactForm.onsubmit = (e) => {
  e.preventDefault();
  let d = new FormData(e.target),
    s = encodeURIComponent(`Halo Didin, saya ${d.get("name")}`),
    b = encodeURIComponent(
      `${d.get("message")}\n\nDari: ${d.get("name")} (${d.get("email")})`
    );
  formStatus.textContent =
    "Aplikasi email akan dibuka untuk menyelesaikan pengiriman.";
  location.href = `mailto:didinirfandy96@gmail.com?subject=${s}&body=${b}`;
};
year.textContent = new Date().getFullYear();
