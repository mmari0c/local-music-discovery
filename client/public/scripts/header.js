function createHeader() {
  const header = document.createElement("header");
  header.id = "site-header";

  // Nav wrapper
  const nav = document.createElement("nav");
  nav.className = "header-nav";

  // Logo / brand
  const brand = document.createElement("a");
  brand.href = "/";
  brand.className = "header-brand";

  const icon = document.createElement("span");
  icon.textContent = "♪";

  const brandText = document.createElement("h1");
  brandText.className = "header-brand-text";
  brandText.textContent = "Local Music Discovery";

  brand.appendChild(icon);
  brand.appendChild(brandText);

  // Nav links
  const links = [
    { label: "Events", href: "/" },
    { label: "Venues", href: "/venues" },
    { label: "Artists", href: "/artists" },
  ];

  const linkList = document.createElement("ul");
  linkList.className = "header-links";

  links.forEach(({ label, href }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (window.location.pathname === href) a.classList.add("active");
    li.appendChild(a);
    linkList.appendChild(li);
  });

  nav.appendChild(brand);
  nav.appendChild(linkList);
  header.appendChild(nav);

  // Insert before #app
  const app = document.getElementById("app");
  document.body.insertBefore(header, app);
}

document.addEventListener("DOMContentLoaded", createHeader);
