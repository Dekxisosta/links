const links = [
  {
    icon: "https://images.icon-icons.com/2429/PNG/512/linkedin_logo_icon_147268.png",
    label: "LinkedIn",
    sub: "professional account",
    href: "https://www.linkedin.com/in/nel-xedrik-ariscon-9b7a40387/",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    label: "GitHub - Coding Repositories",
    sub: "github.com/Dekxisosta",
    href: "https://github.com/Dekxisosta",
  },
  {
    icon: "https://static.vecteezy.com/system/resources/thumbnails/042/127/234/small/white-square-bordered-youtube-logo-on-transparent-background-free-png.png",
    label: "Youtube",
    sub: "youtube.com/Rroquxii",
    href: "https://youtube.com/Rroquxii",
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

  const bow = document.createElement("img");
  bow.className = "bow-decor";
  bow.src = "https://www.nicepng.com/png/full/2-29490_black-rose-png-black-rose.png";
  document.querySelector(".container-main").appendChild(bow);

  const flower = document.createElement("img")
  flower.className = "flower-decor";
  flower.src = "https://www.nicepng.com/png/full/2-29490_black-rose-png-black-rose.png";
  document.querySelector(".container-main").appendChild(flower);

  requestAnimationFrame(() => {
    wrap.style.opacity = "1";
    wrap.style.transform = "scale(1)";
  });
}

function buildHero() {
  const hero = document.querySelector(".hero");

  const name = document.createElement("h1");
  name.className = "hero-name";
  name.textContent = "Dekxi";

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
  const content = document.querySelector(".profile-links");

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
  buildParticles();
});

function buildParticles() {
  const canvas = document.createElement("canvas");
  canvas.className = "particles";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 20 + 8,
    speedY: Math.random() * 0.6 + 0.2,
    speedX: (Math.random() - 0.5) * 0.5,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    opacity: Math.random() * 0.5 + 0.2,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: Math.random() * 0.01 + 0.005,
  }));


  function drawPetal(x, y, size, rotation, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = opacity;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
      size * 0.5, -size * 0.5,
      size, -size * 0.2,
      size * 0.8, size * 0.3
    );
    ctx.bezierCurveTo(
      size * 0.6, size * 0.8,
      size * 0.1, size * 0.6,
      0, 0
    );

    const gradient = ctx.createRadialGradient(
      size * 0.3, 0, 0,
      size * 0.3, 0, size
    );
    gradient.addColorStop(0, "rgb(29, 29, 29)");
    gradient.addColorStop(1, "rgb(87, 87, 87)");

    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * 0.5 + p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      drawPetal(p.x, p.y, p.size, p.rotation, p.opacity);

      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}