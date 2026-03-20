// Image data - names of images in the same folder
const images = [
    "WhatsApp Image 2026-03-20 at 10.01.02 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.01.15 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.06 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.06 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.06 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.06 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.07 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.07 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.07 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.07 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.07 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.07 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM (6).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.08 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.09 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.09 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.09 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.09 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.10 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.10 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.10 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.10 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.10 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.11 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.11 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.11 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.11 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.11 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.11 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.12 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.12 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.12 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.12 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.12 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.12 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM (6).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.13 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.14 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.14 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.14 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.14 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.14 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.14 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.15 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.15 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.15 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.15 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.15 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.15 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.16 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.16 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.16 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.16 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.16 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.16 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.17 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.17 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.17 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.17 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.17 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.17 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.18 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.18 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.18 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.18 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.18 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.18 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.19 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.19 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.19 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.19 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.19 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.20 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.20 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.20 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.20 AM (4).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.20 AM (5).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.20 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.21 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.21 AM (2).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.21 AM (3).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.21 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.28 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.29 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.30 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.31 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.32 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.32 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.33 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.34 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.35 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.36 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.36 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.37 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.37 AM.jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.38 AM (1).jpeg",
    "WhatsApp Image 2026-03-20 at 10.02.38 AM.jpeg"
];

let currentIndex = 0;
const imageGrid = document.getElementById('image-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const downloadBtn = document.getElementById('download-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader safely
    const hideLoader = () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
        }
        AOS.init({ duration: 1200, once: true });
    };

    // Fallback: hide loader after 1.2 seconds if it hasn't hidden already
    const loaderTimeout = setTimeout(hideLoader, 1200);

    window.addEventListener('load', () => {
        clearTimeout(loaderTimeout);
        hideLoader();
    });

    renderAllImages();

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); changeImage(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); changeImage(1); });

    // Robust Download Handler
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = images[currentIndex];
        downloadImage(imgSrc);
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') changeImage(-1);
            if (e.key === 'ArrowLeft') changeImage(1);
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg-img');
        if (heroBg) {
            heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
        }
    });
});

async function downloadImage(url) {
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = 'جاري التحميل... <i class="fas fa-spinner fa-spin"></i>';
    
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = url.split('/').pop(); // Use filename from URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        
        // Success feedback
        downloadBtn.innerHTML = 'تم الحفظ بنجاح! <i class="fas fa-check"></i>';
        setTimeout(() => { downloadBtn.innerHTML = originalText; }, 2000);
    } catch (error) {
        console.error("Download failed:", error);
        // Fallback to direct link
        const link = document.createElement('a');
        link.href = url;
        link.download = url;
        link.click();
        downloadBtn.innerHTML = originalText;
    }
}

function renderAllImages() {
    images.forEach((imgSrc, index) => {
        const card = document.createElement('div');
        card.className = 'img-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 4) * 100);
        
        const duration = 6 + Math.random() * 6;
        const delay = Math.random() * 5;
        card.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        card.innerHTML = `
            <img src="${encodeURIComponent(imgSrc)}" alt="Eid Moment" loading="lazy">
            <div class="card-overlay">
                <button class="btn-primary" style="padding: 10px 25px; font-size: 0.9rem;" onclick="openLightbox(${index})">فتح وتحميل</button>
            </div>
        `;
        imageGrid.appendChild(card);
    });
}

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const imgSrc = images[currentIndex];
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        lightboxImg.src = imgSrc;
        document.getElementById('img-name').innerText = `صورة العيد - رقم ${currentIndex + 1}`;
        lightboxImg.onload = () => {
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        };
    }, 150);
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    updateLightbox();
}
