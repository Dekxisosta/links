const links = [
  {
    icon: "https://images.icon-icons.com/2429/PNG/512/linkedin_logo_icon_147268.png",
    label: "LinkedIn",
    sub: "tis but a fancy display of competence",
    href: "https://www.linkedin.com/in/nel-xedrik-ariscon-9b7a40387/",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    label: "GitHub - Coding Repositories",
    sub: "github.com/Dekxisosta",
    href: "https://github.com/Dekxisosta",
  },
  {
    icon: "https://play-lh.googleusercontent.com/X_tdMAC-1SnBCZpb2lN7WRzOpLA4-sjT_uG82OLLhlIyXF0DcjEuN7XxnZUoUh6BpGP1voWO7SjwY4coSKFKHg",
    label: "Art Commissions",
    sub: "2D art & chibi illustration",
    href: "https://bsky.app/profile/rroquxii.bsky.social",
  },
  {
    icon: "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/0/e/e/0eeeb19633422b1241f4306419a0f15f39d58de9.png",
    label: "Roblox Dev",
    sub: "Games by Dekxisosta",
    href: "#",
  },
  {
    icon: "https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg/revision/latest?cb=20221026155821",
    label: "Portfolio",
    sub: "Projects & work",
    href: "#",
  },
  {
    icon: "https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png",
    label: "Contact",
    sub: "Get in touch",
    href: "mailto:rroquxii@email.com",
  },
];

const profileLinks = [
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1280px-Facebook_f_logo_%282019%29.svg.png", 
    label: "", href: "https://www.facebook.com/dekxisosta/" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1280px-X_logo.jpg", 
    label: "", href: "https://x.com/rroquxii56443" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/1280px-Bluesky_Logo.svg.png", 
    label: "", href: "https://bsky.app/profile/rroquxii.bsky.social" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/3840px-Instagram_logo_2016.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", 
    label: "", href: "https://www.instagram.com/wroquxshii/?hl=en" },
];

function buildHeader() {
  const header = document.querySelector(".header");

  const banner = document.createElement("div");
  banner.className = "header-banner";

  const wrap = document.createElement("div");
  wrap.className = "avatar-wrap";

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = "https://avatars.githubusercontent.com/u/201718391?v=4";

  wrap.appendChild(avatar);
  header.appendChild(banner);
  header.appendChild(wrap);

  wrap.style.opacity = "0";
  wrap.style.transform = "scale(0.85)";
  wrap.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  requestAnimationFrame(() => {
    wrap.style.opacity = "1";
    wrap.style.transform = "scale(1)";
  });
}

function buildHero() {
  const hero = document.querySelector(".hero");

  const name = document.createElement("h1");
  name.className = "hero-name";
  name.textContent = "Dekxisosta";

  const handle = document.createElement("p");
  handle.className = "hero-handle";
  handle.textContent = "@dekxisosta";

  const bio = document.createElement("p");
  bio.className = "hero-bio";
  bio.textContent = "CS student · full-stack app builder · roblox studio dev · UI / Visual Design";

  hero.append(name, handle, bio);
}

function buildLinks() {
  const content = document.querySelector(".content");

  links.forEach((link, i) => {
    const a = document.createElement("a");
    a.className = "link-card";
    a.href = link.href;
    if (!link.href.startsWith("mailto") && link.href !== "#") {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    a.innerHTML = `
      <img class="link-icon" src="${link.icon}">
      <div class="link-text">
        <div class="link-label">${link.label}</div>
        ${link.sub ? `<div class="link-sub">${link.sub}</div>` : ""}
      </div>
      <span class="link-arrow">→</span>
    `;

    a.style.animationDelay = `${0.35 + i * 0.08}s`;
    a.classList.add("visible");

    content.appendChild(a);
  });
}
function buildProfileLinks() {
  const content = document.querySelector(".content");

  const section = document.createElement("div");
  section.className = "profile-links";

  profileLinks.forEach((link) => {
    const a = document.createElement("a");
    a.className = "profile-link";
    a.href = link.href;
    if (!link.href.startsWith("mailto") && link.href !== "#") {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = `<img src=${link.icon} class="profile-link-icon">`;
    section.appendChild(a);
  });

  content.appendChild(section);
}

document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildHero();
  buildProfileLinks();
  buildLinks();
});