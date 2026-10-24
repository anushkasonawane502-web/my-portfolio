
/*
  ANUSHKA'S PORTFOLIO SETTINGS

  Replace the empty strings below with your real links.
  Keep the quotation marks.
*/

const portfolio = {
  github: "",
  linkedin: "",
  email: ""
};

// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after choosing a section
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Set up a profile link only when a real URL is provided
function setProfileLink(elementId, url) {
  const element = document.getElementById(elementId);

  if (!element || !url.trim()) {
    return;
  }

  // Only allow HTTPS profile links
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.protocol !== "https:") {
      return;
    }

    element.href = parsedUrl.href;
    element.hidden = false;
  } catch {
    // Invalid or incomplete URL: leave the link hidden
  }
}

// GitHub links
setProfileLink("hero-github", portfolio.github);
setProfileLink("contact-github", portfolio.github);

// LinkedIn links
setProfileLink("hero-linkedin", portfolio.linkedin);
setProfileLink("contact-linkedin", portfolio.linkedin);

// Email link
if (portfolio.email.trim()) {
  const email = portfolio.email.trim();

  // Basic email format check
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (validEmail) {
    const emailButton = document.getElementById("contact-email");
    emailButton.href = `mailto:${email}`;
    emailButton.hidden = false;
  }
}

// Hide the contact placeholder if at least one contact link exists
const contactIds = [
  "contact-email",
  "contact-github",
  "contact-linkedin"
];

const hasContactLink = contactIds.some((id) => {
  return !document.getElementById(id).hidden;
});

if (hasContactLink) {
  document.getElementById("contact-placeholder").hidden = true;
}

// Automatically display the current year
document.getElementById("current-year").textContent =
  new Date().getFullYear();
