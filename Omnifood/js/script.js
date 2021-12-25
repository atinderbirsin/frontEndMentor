const NavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");
const nav = document.querySelector(".nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const sectionHero = document.querySelector(".section-hero");

const headerHeight = headerEl.clientHeight;

NavEl.addEventListener("click", function (e) {
  e.preventDefault();
  headerEl.classList.toggle("nav-open");
});

NavEl.addEventListener("click", function (e) {
  main.classList.toggle("blur");
  footer.classList.toggle("blur");
});

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  });
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  const href = e.target.hash;

  if (
    href === "#how" ||
    href === "#meals" ||
    href === "#testimonials" ||
    href === "#pricing" ||
    href === "#cta"
  ) {
    headerEl.classList.remove("nav-open");
    main.classList.remove("blur");
    footer.classList.remove("blur");
  }
});

// Intersection Observer
const sectionCallback = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    headerEl.classList.add("sticky");
  } else {
    headerEl.classList.remove("sticky");
  }
};

const sectionObserver = new IntersectionObserver(sectionCallback, {
  root: null,
  rootMargin: `-${headerHeight}px`,
  threshold: 0,
});

sectionObserver.observe(sectionHero);
