// ========== إعدادات كل عيد ==========
const EID_DATA = {
    fitr: {
        theme: 'theme-fitr',
        label: 'الفطر',
        title: 'ذكريات عيد الفطر 2026 - م. أحمد عمرو ابوالحاج',
        preGreeting: 'بمناسبة حلول عيد الفطر السعيد',
        eidWish: 'يهنئكم بحلول عيد الفطر المبارك - 2026',
        verse: '"كل عام وأنتم بخير وصحة وسعادة"',
        galleryTitle: 'معرض صور عيد الفطر',
        galleryDesc: 'اضغط زر التحميل ↓ على أي صورة لحفظها على هاتفك',
        photoLabel: 'صورة عيد الفطر',
        folder: ''
    },
    adha: {
        theme: 'theme-adha',
        label: 'الأضحى',
        title: 'ذكريات عيد الأضحى 2026 - م. أحمد عمرو ابوالحاج',
        preGreeting: 'بمناسبة حلول عيد الأضحى المبارك',
        eidWish: 'يتقدم المهندس أحمد عمرو ابوالحاج بأحر التهاني وأطيب التبريكات بمناسبة عيد الأضحى المبارك',
        verse: '"تقبل الله منا ومنكم صالح الأعمال — عيد أضحى مبارك"',
        galleryTitle: 'معرض صور عيد الأضحى',
        galleryDesc: 'اضغط زر التحميل ↓ على أي صورة لحفظها على هاتفك',
        photoLabel: 'صورة عيد الأضحى',
        folder: 'eid-adha/'
    }
};

// صور عيد الفطر (في المجلد الرئيسي)
const imagesFitr = [
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

// صور عيد الأضحى — ضع الصور في مجلد eid-adha وأضف أسماءها هنا
const imagesAdha = [
    // مثال: "photo1.jpeg",
    // "photo2.jpeg",
];

const IMAGE_SETS = { fitr: imagesFitr, adha: imagesAdha };

let currentEid = null;
let images = [];
let currentIndex = 0;
let aosInitialized = false;

const imageGrid = document.getElementById('image-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.lb-close');
const downloadBtn = document.getElementById('download-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const eidPicker = document.getElementById('eid-picker');
const mainApp = document.getElementById('main-app');
const emptyGallery = document.getElementById('empty-gallery');

function getImagePath(filename) {
    const folder = EID_DATA[currentEid].folder;
    return folder + filename;
}

function encodeImageSrc(path) {
    return path.split('/').map(part => encodeURIComponent(part)).join('/');
}

function selectEid(eidType) {
    currentEid = eidType;
    const data = EID_DATA[eidType];
    images = IMAGE_SETS[eidType].map(name => getImagePath(name));

    document.getElementById('app-body').className = data.theme;
    document.title = data.title;
    document.getElementById('nav-eid-label').textContent = data.label;
    document.getElementById('pre-greeting').textContent = data.preGreeting;
    document.getElementById('eid-wish').textContent = data.eidWish;
    document.getElementById('verse-text').textContent = data.verse;
    document.getElementById('gallery-title').textContent = data.galleryTitle;
    document.getElementById('gallery-desc').textContent = data.galleryDesc;
    document.getElementById('photo-count').textContent = images.length;

    eidPicker.classList.add('picker-exit');
    mainApp.classList.remove('hidden');

    renderGallery();

    if (!aosInitialized) {
        AOS.init({ duration: 1200, once: true });
        aosInitialized = true;
    } else {
        AOS.refresh();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showEidPicker() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    mainApp.classList.add('hidden');
    eidPicker.classList.remove('picker-exit');
    currentEid = null;
}

function renderGallery() {
    imageGrid.innerHTML = '';

    if (images.length === 0) {
        emptyGallery.classList.remove('hidden');
        return;
    }

    emptyGallery.classList.add('hidden');

    IMAGE_SETS[currentEid].forEach((imgName, index) => {
        const imgSrc = getImagePath(imgName);
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 4) * 80);

        card.innerHTML = `
            <img src="${encodeImageSrc(imgSrc)}" alt="${EID_DATA[currentEid].photoLabel}" loading="lazy">
            <button type="button" class="photo-dl-btn" aria-label="تحميل الصورة" title="تحميل على الهاتف">
                <i class="fas fa-download"></i>
            </button>
            <div class="photo-overlay">
                <span><i class="fas fa-expand"></i> اضغط للعرض</span>
            </div>
        `;

        const dlBtn = card.querySelector('.photo-dl-btn');
        dlBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            downloadImage(imgSrc, dlBtn);
        });

        card.addEventListener('click', (e) => {
            if (e.target.closest('.photo-dl-btn')) return;
            openLightbox(index);
        });

        imageGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const hideLoader = () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
        }
    };

    const loaderTimeout = setTimeout(hideLoader, 1200);
    window.addEventListener('load', () => {
        clearTimeout(loaderTimeout);
        hideLoader();
    });

    document.querySelectorAll('.picker-card').forEach(card => {
        card.addEventListener('click', () => selectEid(card.dataset.eid));
    });

    document.getElementById('switch-eid-btn').addEventListener('click', showEidPicker);

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

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadImage(images[currentIndex], downloadBtn);
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

});

const IS_MOBILE = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

let toastTimer = null;

function showToast(message, duration = 3500) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);
}

function getFilename(url) {
    const name = decodeURIComponent(url.split('/').pop().split('?')[0]);
    return name && name.includes('.') ? name : `eid-photo-${Date.now()}.jpg`;
}

function imageUrlToBlob(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                canvas.getContext('2d').drawImage(img, 0, 0);
                canvas.toBlob(
                    (blob) => (blob ? resolve(blob) : reject(new Error('blob failed'))),
                    'image/jpeg',
                    0.92
                );
            } catch (err) {
                reject(err);
            }
        };
        img.onerror = () => reject(new Error('image load failed'));
        img.src = url;
    });
}

async function fetchImageBlob(url) {
    const encoded = encodeImageSrc(url);
    try {
        const res = await fetch(encoded);
        if (res.ok) return await res.blob();
    } catch (_) { /* file:// أو شبكة */ }
    return imageUrlToBlob(encoded);
}

function triggerBlobDownload(blob, filename) {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
}

function setButtonLoading(btn, loading) {
    if (!btn) return;
    if (loading) {
        btn.dataset.prevHtml = btn.innerHTML;
        btn.classList.add('is-loading');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;
    } else {
        btn.classList.remove('is-loading');
        btn.disabled = false;
        if (btn.dataset.prevHtml) btn.innerHTML = btn.dataset.prevHtml;
    }
}

async function downloadImage(url, buttonEl) {
    const filename = getFilename(url);
    setButtonLoading(buttonEl, true);

    try {
        const blob = await fetchImageBlob(url);
        const file = new File([blob], filename, { type: blob.type || 'image/jpeg' });

        // iPhone: مشاركة → حفظ في الصور
        if (IS_MOBILE && navigator.share && navigator.canShare?.({ files: [file] })) {
            try {
                await navigator.share({ files: [file], title: filename });
                showToast('اختر «حفظ الصورة» أو «Save Image» من القائمة');
                return;
            } catch (err) {
                if (err.name === 'AbortError') return;
            }
        }

        triggerBlobDownload(blob, filename);
        showToast(IS_MOBILE ? 'تم — تحقق من مجلد التحميلات أو الإشعارات' : 'تم تحميل الصورة');
    } catch (error) {
        console.error('Download failed:', error);
        const link = document.createElement('a');
        link.href = encodeImageSrc(url);
        link.download = filename;
        link.target = '_blank';
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(
            IS_MOBILE
                ? 'اضغط مطولاً على الصورة ثم «حفظ في الصور»'
                : 'لم ينجح التحميل التلقائي — جرّب مرة أخرى'
        );
    } finally {
        setButtonLoading(buttonEl, false);
    }
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
        const src = encodeImageSrc(imgSrc);
        lightboxImg.src = src;
        downloadBtn.href = src;
        downloadBtn.download = getFilename(imgSrc);
        document.getElementById('img-name').innerText =
            `${EID_DATA[currentEid].photoLabel} - رقم ${currentIndex + 1}`;
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
