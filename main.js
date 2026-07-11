document.addEventListener("DOMContentLoaded", () => {
    const friends = [
        {
            friendName: "LYGreen",
            friendProfilePictureLink: "https://avatars.githubusercontent.com/u/88890606?v=4",
            friendCoverLink: "https://lygreen.github.io/banner.svg",
            friendDescription: "cutie based in China, deep in the ML/AI rabbit hole. Certified learning monster",
            friendTags: ["ML/AI", "China", "Arch Linux"],
            friendLinks: [
                { name: "GitHub", url: "https://github.com/LYGreen" },
                { name: "Twitter", url: "https://x.com/LYGreen_lili__"},
                { name: "Page", url: "https://lygreen.github.io/"},
            ]
        },
        {
            friendName: "SHUBARUUU",
            friendProfilePictureLink: "https://avatars.githubusercontent.com/u/162527652?v=4",
            friendCoverLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBC7RMnAV1Vf71EGiAGEw_42-Uf4UbhtSTNwjTgnG4ehsUJFW1qTeVS4&s=10",
            friendDescription: "arch linux enjoyer through and through. probably ricing his setup right now",
            friendTags: ["Arch Linux", "Ricing"],
            friendLinks: [
                { name: "GitHub", url: "https://github.com/SHUBARUUU" }
            ]
        },
        {
            friendName: "KonQuinque",
            friendProfilePictureLink: "https://unavatar.io/twitter/KonQuinque",
            friendCoverLink: "https://m.media-amazon.com/images/I/71eDCDeqEIL.jpg",
            friendDescription: "artist, visual communications and design student, based in Mexico",
            friendTags: ["TADC", "Art"],
            friendLinks: [
                { name: "Twitter", url: "https://x.com/KonQuinque" },
                { name: "Carrd", url: "https://kon-q.carrd.co/" }
            ]
        },
    ];

    const ICON_MAP = {
        "GitHub": "logo-github",
        "Twitter": "logo-twitter",
        "Carrd": "link-outline",
        "Bluesky": "cloud-outline",
        "Instagram": "logo-instagram",
        "TikTok": "logo-tiktok",
        "YouTube": "logo-youtube",
        "Ko-fi": "cafe-outline",
        "Email": "mail-outline"
    };

    function renderFriends(list) {
        const listEl = document.getElementById("friendsList");
        if (!listEl) {
            console.warn("friendsList element not found in DOM");
            return;
        }

        listEl.innerHTML = list.map((f, i) => `
            <div class="friend-row" style="animation-delay: ${0.1 + i * 0.05}s;">
            <div class="friend-cover" style="background-image: url('${f.friendCoverLink || ""}');"></div>
            <div class="friend-header">
                <div class="friend-avatar-wrap">
                    <img class="friend-avatar" src="${f.friendProfilePictureLink}" alt="${f.friendName}">
                    <img class="friend-avatar-gif" src="https://64.media.tumblr.com/7ea97be03c01198118541c21c6d9a930/9ae2b653243aa457-1a/s400x600/7d1a61c36da80ac0f1e6a40c52d4e121d16d33ed.gif" alt="">
                </div>
            </div>
            <div class="friend-text">
                <span class="friend-name">${f.friendName}</span>
                ${f.friendDescription ? `<span class="friend-desc">${f.friendDescription}</span>` : ""}
                ${f.friendTags && f.friendTags.length ? `
                <div class="friend-tags">
                    ${f.friendTags.map(tag => `<span class="friend-tag">${tag}</span>`).join("")}
                </div>
                ` : ""}
                ${f.friendLinks && f.friendLinks.length ? `
                <div class="friend-links">
                    ${f.friendLinks.map(link => `
                        <a class="friend-link-badge" href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.name}">
                            <ion-icon name="${ICON_MAP[link.name] || "link-outline"}"></ion-icon>
                        </a>
                    `).join("")}
                </div>
                ` : ""}
            </div>
            </div>
        `).join("");
    }
  renderFriends(friends);
});