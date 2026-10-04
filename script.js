// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: submit to Formspree without leaving the page
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (form.action.includes("YOUR_FORM_ID")) {
    status.textContent = "The contact form isn't connected yet. Please check back soon.";
    return;
  }
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(res.statusText);
    form.reset();
    status.textContent = "Thank you! Your message was sent. We'll be in touch soon.";
  } catch {
    status.textContent = "Sorry, something went wrong. Please try again in a moment.";
  }
});
