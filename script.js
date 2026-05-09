// ===== HAMBURGER MENU =====
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  mob.classList.toggle('open');
});
function closeMenu() {
  ham.classList.remove('active');
  mob.classList.remove('open');
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 40
    ? 'rgba(13,13,13,0.97)'
    : 'rgba(13,13,13,0.92)';
});

// ===== FADE IN ON SCROLL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== MODAL LAYANAN =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
}
function closeModalOutside(event, id) {
  if (event.target === event.currentTarget) closeModal(id);
}
// Tutup modal dengan tombol ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
    });
    document.getElementById('lightbox').classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

// ===== LIGHTBOX GALERI =====
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = src;
  cap.textContent = caption;
  lb.classList.add('open');
  document.body.classList.add('modal-open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.classList.remove('modal-open');
}

// ===== KIRIM WA =====
function sendWA() {
  const nama    = document.querySelector('input[placeholder="Nama Anda"]').value || 'Pelanggan';
  const hp      = document.querySelector('input[placeholder="08xx-xxxx-xxxx"]').value || '-';
  const layanan = document.querySelector('select').value || 'Belum dipilih';
  const pesan   = document.querySelector('textarea').value || '-';
  const msg = `Halo SYK Smart Technology 👋\n\n*Nama:* ${nama}\n*No. HP:* ${hp}\n*Layanan:* ${layanan}\n*Pesan:* ${pesan}`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
}
