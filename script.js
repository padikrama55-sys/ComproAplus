/*
  CARA GANTI GAMBAR: masukkan gambar ke assets/images, lalu ubah nilai "image".
  CARA TAMBAH PROYEK: salin satu objek dan ubah isinya.
  Kategori yang tersedia: event, creative, branding, production.
*/
const portfolioItems = [
  { title: "Asian–African Meet & Greet", category: "event", label: "Event & Exhibition", image: "assets/images/asian-african-meet-greet.jpg", description: "Dokumentasi pengalaman event dengan rangkaian pertunjukan, panggung, dan interaksi budaya yang kuat." },
  { title: "Bandung Cultural Night", category: "event", label: "Event & Exhibition", image: "assets/images/bandung-cultural-night.jpg", description: "Pengembangan pengalaman acara budaya melalui pertunjukan, tata panggung, dan atmosfer visual." },
  { title: "Foodland", category: "event", label: "Event Activation", image: "assets/images/foodland.jpg", description: "Aktivasi event food and beverage yang menggabungkan area pengalaman, visual event, dan program panggung." },
  { title: "Crafashtival", category: "event", label: "Festival Activation", image: "assets/images/crafashtival.jpg", description: "Festival kreatif dengan berbagai titik aktivitas, tenant, workshop, dan pengalaman pengunjung." },
  { title: "Bandung Eat & Run", category: "event", label: "Event & Production", image: "assets/images/bandung-eat-run.jpg", description: "Eksekusi visual dan area event yang mendukung perjalanan peserta dari start hingga program hiburan." },
  { title: "IP Visual & Mascot", category: "creative", label: "Creative & Visual", image: "assets/images/ip-visual-mascot.jpg", description: "Pengembangan karakter, maskot, ilustrasi, dan intellectual property visual untuk memperkuat identitas program." },
  { title: "Proposal Event", category: "creative", label: "Creative Direction", image: "assets/images/proposal-event.jpg", description: "Konsep event, visual presentation, layout, dan gambaran experience untuk membantu brand melihat ide secara utuh." },
  { title: "Branding & Concept Event", category: "creative", label: "Design & Installation", image: "assets/images/branding-concept-event.jpg", description: "Penerjemahan key visual menjadi rangkaian elemen event yang konsisten dan siap diproduksi." },
  { title: "Motion Graphic", category: "creative", label: "Motion & Content", image: "assets/images/motion-graphic.jpg", description: "Konten bergerak untuk campaign, event screen, typography, visual storytelling, dan kebutuhan komunikasi digital." },
  { title: "Illustration", category: "creative", label: "Illustration & Visual", image: "assets/images/illustration.jpg", description: "Ilustrasi dengan gaya yang disesuaikan untuk campaign, editorial, media edukasi, dan kebutuhan komunikasi brand." },
  { title: "Sign Design", category: "branding", label: "Signage System", image: "assets/images/sign-design.jpg", description: "Perancangan sistem signage dan wayfinding yang memperhatikan hierarki informasi, pengguna, dan lokasi." },
  { title: "Mural", category: "branding", label: "Environmental Branding", image: "assets/images/mural.jpg", description: "Mural dan branding area untuk memperkuat identitas ruang serta menciptakan titik interaksi visual." },
  { title: "Icon Sign", category: "branding", label: "Branding & Signage", image: "assets/images/icon-sign.jpg", description: "Produksi dan pemasangan icon sign yang konsisten dengan kebutuhan identitas serta kondisi lokasi." },
  { title: "Booth Decoration", category: "production", label: "Booth & Display", image: "assets/images/booth-decoration.jpg", description: "Dekorasi booth dan display yang menggabungkan visual brand, material, struktur, serta pengalaman pengunjung." },
  { title: "Photo Booth", category: "production", label: "Experience Installation", image: "assets/images/photo-booth.jpg", description: "Photo booth tematik sebagai titik interaksi, dokumentasi, dan amplifikasi pengalaman brand." },
  { title: "Staging", category: "production", label: "Stage Production", image: "assets/images/staging.jpg", description: "Produksi panggung, backdrop, dan elemen pendukung sesuai konsep, ukuran lokasi, dan kebutuhan teknis acara." },
  { title: "Exterior Decorative", category: "production", label: "Exterior Installation", image: "assets/images/exterior-decorative.jpg", description: "Dekorasi eksterior dan instalasi ruang yang mempertimbangkan material, struktur, cuaca, serta pengalaman visual." },
  { title: "Neon Box", category: "branding", label: "Illuminated Signage", image: "assets/images/neon-box.jpg", description: "Neon box dan lightbox untuk meningkatkan visibilitas brand pada area indoor maupun outdoor." },
  { title: "Name Board", category: "branding", label: "Store Branding", image: "assets/images/name-board.jpg", description: "Produksi name board dan plang toko dengan material serta finishing yang disesuaikan dengan kebutuhan lokasi." },
  { title: "Banner & Shopblind", category: "branding", label: "Retail Branding", image: "assets/images/banner.jpg", description: "Branding retail melalui banner, shopblind, fasia, dan media promosi yang konsisten pada banyak titik." },
  { title: "Tripod Banner", category: "branding", label: "Promotional Display", image: "assets/images/tripod-banner.jpg", description: "Media tripod dan display promosi yang fleksibel untuk area komersial, event, dan kampanye temporer." },
  { title: "POS Material", category: "production", label: "Point of Sale", image: "assets/images/pos-material.jpg", description: "Custom point-of-sale material, product display, merchandise, dan media pendukung aktivitas promosi." }
];

const grid = document.querySelector("#portfolioGrid");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#portfolioSearch");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const dialog = document.querySelector("#portfolioDialog");
let activeFilter = "all";

const normalizeText = (value) => value.toLocaleLowerCase("id-ID").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function renderPortfolio() {
  const query = normalizeText(searchInput.value.trim());
  const items = portfolioItems.filter((item) => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter;
    return matchesCategory && normalizeText(`${item.title} ${item.label} ${item.description}`).includes(query);
  });

  grid.innerHTML = items.map((item, index) => {
    const originalIndex = portfolioItems.indexOf(item);
    return `<article class="portfolio-card" style="animation-delay:${Math.min(index * 45, 360)}ms">
      <button type="button" data-portfolio-index="${originalIndex}" aria-label="Lihat proyek ${item.title}">
        <span class="portfolio-image"><img src="${item.image}" alt="Dokumentasi ${item.title}" loading="lazy" width="1200" height="507"></span>
        <span class="portfolio-card-copy"><span><h3>${item.title}</h3><p>${item.label}</p></span><span aria-hidden="true">${String(originalIndex + 1).padStart(2, "0")}</span></span>
      </button>
    </article>`;
  }).join("");

  resultCount.textContent = items.length;
  emptyState.hidden = items.length !== 0;
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderPortfolio();
}

filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));
searchInput.addEventListener("input", renderPortfolio);
document.querySelectorAll("[data-jump-filter]").forEach((button) => button.addEventListener("click", () => {
  searchInput.value = "";
  setFilter(button.dataset.jumpFilter);
  document.querySelector("#portofolio").scrollIntoView({ behavior: "smooth" });
}));

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-portfolio-index]");
  if (!button) return;
  const item = portfolioItems[Number(button.dataset.portfolioIndex)];
  const image = document.querySelector("#dialogImage");
  image.src = item.image;
  image.alt = `Dokumentasi ${item.title}`;
  document.querySelector("#dialogCategory").textContent = item.label;
  document.querySelector("#dialogTitle").textContent = item.title;
  document.querySelector("#dialogDescription").textContent = item.description;
  dialog.showModal();
  document.body.classList.add("dialog-open");
});

function closeDialog() { dialog.close(); document.body.classList.remove("dialog-open"); }
document.querySelector(".dialog-close").addEventListener("click", closeDialog);
document.querySelector("#dialogContact").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });

const header = document.querySelector("#siteHeader");
const progress = document.querySelector("#scrollProgress");
function updateScrollUI() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${available > 0 ? (window.scrollY / available) * 100 : 0}%`;
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");
function closeMenu() { siteNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); }
menuToggle.addEventListener("click", () => {
  const open = !siteNav.classList.contains("open");
  siteNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});
siteNav.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
}), { threshold: .12, rootMargin: "0px 0px -40px" });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#currentYear").textContent = new Date().getFullYear();
renderPortfolio();
